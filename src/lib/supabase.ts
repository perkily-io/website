import { createClient } from '@supabase/supabase-js';

// Vite uses import.meta.env instead of process.env
// Environment variables must be prefixed with VITE_ to be exposed
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://oqwfrvjkhrsdsnifyyfd.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_cBZAB0q4FSC0CylhRYI3-g_SiRmBk6t';

if (!import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn(
    '⚠️ VITE_SUPABASE_ANON_KEY is not set in .env file. Using fallback key. ' +
    'Please create a .env file with your Supabase credentials for production use.'
  );
}

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase configuration is missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 