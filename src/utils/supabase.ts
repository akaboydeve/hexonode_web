import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// This client should only be used in browser components
export const createSupabaseBrowserClient = () => {
    return createBrowserClient(supabaseUrl, supabaseAnonKey);
}; 