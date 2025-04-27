/*
  # Fix profile creation and validation

  1. Changes
    - Drop and recreate profiles table with proper constraints
    - Add better error handling in triggers
    - Fix profile creation on signup
    - Add proper indexes and validations

  2. Security
    - Maintain RLS policies
    - Add proper constraints
*/

-- Drop existing objects if they exist
DO $$ BEGIN
  -- Drop triggers first
  DROP TRIGGER IF EXISTS create_profile_on_signup ON auth.users;
  DROP TRIGGER IF EXISTS update_profiles_timestamp ON profiles;
  DROP TRIGGER IF EXISTS validate_profile_trigger ON profiles;
  
  -- Drop functions
  DROP FUNCTION IF EXISTS handle_new_user();
  DROP FUNCTION IF EXISTS handle_profile_update();
  DROP FUNCTION IF EXISTS validate_profile();
  
  -- Drop policies safely
  DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
  DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
  DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
  
  -- Drop table if it exists
  DROP TABLE IF EXISTS profiles;
END $$;

-- Create profiles table with proper constraints
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  name text,
  phone text,
  address text,
  avatar_url text,
  bio text,
  preferences jsonb DEFAULT '{}'::jsonb,
  last_login timestamptz,
  login_count integer DEFAULT 0,
  is_profile_complete boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT profiles_email_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT phone_format CHECK (phone ~ '^\+?[0-9\s-\(\)]+$' OR phone IS NULL),
  CONSTRAINT name_length CHECK (char_length(name) >= 2 OR name IS NULL),
  CONSTRAINT bio_length CHECK (char_length(bio) <= 500)
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

-- Function to validate profile data
CREATE OR REPLACE FUNCTION validate_profile()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if profile is complete
  NEW.is_profile_complete := (
    NEW.name IS NOT NULL AND
    NEW.email IS NOT NULL AND
    NEW.phone IS NOT NULL AND
    NEW.address IS NOT NULL
  );
  
  -- Ensure email is lowercase
  NEW.email := lower(NEW.email);
  
  -- Trim whitespace from name if present
  IF NEW.name IS NOT NULL THEN
    NEW.name := trim(NEW.name);
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to create profile on signup with better error handling
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    name,
    created_at,
    updated_at,
    is_profile_complete,
    login_count,
    preferences
  )
  VALUES (
    NEW.id,
    lower(NEW.email),
    CASE 
      WHEN NEW.raw_user_meta_data->>'name' IS NOT NULL THEN 
        trim(NEW.raw_user_meta_data->>'name')
      ELSE
        NULL
    END,
    now(),
    now(),
    false,
    0,
    '{}'::jsonb
  );
  
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log error details but don't prevent user creation
  RAISE WARNING 'Error creating profile for user %: %', NEW.id, SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER update_profiles_timestamp
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION handle_profile_update();

CREATE TRIGGER validate_profile_trigger
  BEFORE INSERT OR UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION validate_profile();

CREATE TRIGGER create_profile_on_signup
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS profiles_email_idx ON profiles (email);
CREATE INDEX IF NOT EXISTS profiles_name_idx ON profiles (name);
CREATE INDEX IF NOT EXISTS profiles_last_login_idx ON profiles (last_login);
CREATE INDEX IF NOT EXISTS profiles_is_complete_idx ON profiles (is_profile_complete);