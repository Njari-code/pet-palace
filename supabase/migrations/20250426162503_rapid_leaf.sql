/*
  # Enhance profiles table and add additional functionality

  1. Changes
    - Add additional profile fields for better user data capture
    - Add validation triggers for data integrity
    - Add indexes for improved query performance
    - Add audit fields for tracking changes

  2. Security
    - Maintain existing RLS policies
    - Add data validation
*/

-- Add new columns to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS avatar_url text,
ADD COLUMN IF NOT EXISTS bio text,
ADD COLUMN IF NOT EXISTS preferences jsonb DEFAULT '{}'::jsonb,
ADD COLUMN IF NOT EXISTS last_login timestamptz,
ADD COLUMN IF NOT EXISTS login_count integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS is_profile_complete boolean DEFAULT false;

-- Add check constraints
ALTER TABLE profiles
ADD CONSTRAINT phone_format CHECK (phone ~ '^\+?[0-9\s-\(\)]+$' OR phone IS NULL),
ADD CONSTRAINT name_length CHECK (char_length(name) >= 2),
ADD CONSTRAINT bio_length CHECK (char_length(bio) <= 500);

-- Create function to validate profile data
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
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for profile validation
DROP TRIGGER IF EXISTS validate_profile_trigger ON profiles;
CREATE TRIGGER validate_profile_trigger
  BEFORE INSERT OR UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION validate_profile();

-- Function to update last login
CREATE OR REPLACE FUNCTION update_last_login()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE profiles
  SET 
    last_login = now(),
    login_count = login_count + 1
  WHERE id = NEW.id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for updating last login
DROP TRIGGER IF EXISTS update_last_login_trigger ON auth.users;
CREATE TRIGGER update_last_login_trigger
  AFTER INSERT OR UPDATE OF last_sign_in_at ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION update_last_login();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS profiles_name_idx ON profiles (name);
CREATE INDEX IF NOT EXISTS profiles_last_login_idx ON profiles (last_login);
CREATE INDEX IF NOT EXISTS profiles_is_complete_idx ON profiles (is_profile_complete);

-- Update existing profiles to check completion status
UPDATE profiles
SET is_profile_complete = (
  name IS NOT NULL AND
  email IS NOT NULL AND
  phone IS NOT NULL AND
  address IS NOT NULL
);