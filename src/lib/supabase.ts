import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.PUBLIC_SUPABASE_URL;
const key = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

/** True when both env vars are set; comments are hidden otherwise. */
export const supabaseConfigured = Boolean(url && key);

let client: SupabaseClient | undefined;

export function getSupabase(): SupabaseClient {
  client ??= createClient(url, key, { auth: { persistSession: false } });
  return client;
}
