/*
  # Update profiles table and triggers

  1. Changes
    - Consolidate duplicate migrations
    - Fix profile creation trigger to handle null metadata
    - Add proper error handling in trigger function
    - Ensure proper cleanup of existing objects

  2. Security
    - Maintain existing RLS policies
    - Keep existing table structure
*/

-- Drop existing objects if they exist
DROP TRIGGER IF EXISTS create_profile_on_signup ON auth.users;
DROP TRIGGER IF EXISTS update_profiles_timestamp ON profiles;
DROP FUNCTION IF EXISTS handle_new_user();
DROP FUNCTION IF EXISTS handle_profile_update();
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP TABLE IF EXISTS profiles;

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text NOT NULL,
  name text,
  phone text,
  address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" 
  ON profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

-- Function to handle profile updates
CREATE FUNCTION handle_profile_update()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updating the updated_at timestamp
CREATE TRIGGER update_profiles_timestamp
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_profile_update();

-- Function to create profile on signup with better error handling
CREATE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert profile with safe handling of null metadata
  INSERT INTO public.profiles (id, email, name)
  VALUES (
    NEW.id,
    COALESCE(NEW.email, ''),
    CASE 
      WHEN NEW.raw_user_meta_data IS NULL THEN NULL
      WHEN NEW.raw_user_meta_data->>'name' IS NULL THEN NULL
      ELSE NEW.raw_user_meta_data->>'name'
    END
  );
  
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log error details to the Postgres log
  RAISE WARNING 'Error creating profile for user %: %', NEW.id, SQLERRM;
  -- Still return NEW to allow user creation even if profile creation fails
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to create profile after signup
CREATE TRIGGER create_profile_on_signup
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();