/*
  # Fix profiles table and triggers

  1. Changes
    - Drop existing objects and recreate them cleanly
    - Add better error handling in functions
    - Add proper constraints and indexes
    - Fix profile creation on signup

  2. Security
    - Maintain existing RLS policies
    - Add proper constraints
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

-- Create profiles table with proper constraints
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
  INSERT INTO public.profiles (id, email, name)
  VALUES (
    NEW.id,
    COALESCE(NEW.email, ''),
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email)
  );
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'Error creating profile for user %: %', NEW.id, SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to create profile after signup
CREATE TRIGGER create_profile_on_signup
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS profiles_email_idx ON profiles (email);
CREATE INDEX IF NOT EXISTS profiles_name_idx ON profiles (name);