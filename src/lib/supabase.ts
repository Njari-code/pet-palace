import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const retryFetch = async (url: string, options = {}, retries = 3, backoff = 300) => {
  let lastError;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || response.statusText}`);
      }

      return response;
    } catch (error) {
      lastError = error;
      console.error(`Fetch attempt ${i + 1} failed:`, error);

      if (i === retries - 1) break;
      await delay(backoff * Math.pow(2, i));
    }
  }

  throw lastError || new Error(`Failed to fetch after ${retries} retries`);
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  global: {
    fetch: retryFetch,
    headers: {
      'x-client-info': 'petpalace-web'
    }
  },
  db: {
    schema: 'public'
  }
});

export type Profile = {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  address: string | null;
  avatar_url: string | null;
  bio: string | null;
  preferences: Record<string, any>;
  last_login: string | null;
  login_count: number;
  is_profile_complete: boolean;
  created_at: string;
  updated_at: string;
};