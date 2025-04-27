/*
  # Fix profiles table and triggers

  1. Changes
    - Drop and recreate profiles table with proper constraints
    - Add better error handling to triggers
    - Fix profile creation on signup
    - Add proper RLS policies

  2. Security
    - Maintain RLS policies
    - Add insert policy for profile creation
*/

-- Drop existing objects if they exist
DO $$ BEGIN
  -- Drop triggers first
  DROP TRIGGER IF EXISTS create_profile_on_signup ON auth.users;
  DROP TRIGGER IF EXISTS update_profiles_timestamp ON profiles;
  
  -- Drop functions
  DROP FUNCTION IF EXISTS handle_new_user();
  DROP FUNCTION IF EXISTS handle_profile_update();
  
  -- Drop policies safely
  DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
  DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
  DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
  
  -- Drop table if it exists
  DROP TABLE IF EXISTS profiles;
END $$;

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  name text,
  phone text,
  address text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT profiles_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
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

CREATE POLICY "Users can insert own profile" 
  ON profiles 
  FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- Function to handle profile updates
CREATE OR REPLACE FUNCTION handle_profile_update()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'Error updating profile timestamp: %', SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updating the updated_at timestamp
CREATE TRIGGER update_profiles_timestamp
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_profile_update();

-- Function to create profile on signup with better error handling
CREATE OR REPLACE FUNCTION handle_new_user()
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
  -- Log error details but don't prevent user creation
  RAISE WARNING 'Error creating profile for user %: %', NEW.id, SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to create profile after signup
CREATE TRIGGER create_profile_on_signup
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS profiles_email_idx ON profiles (email);