import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export async function subscribeEmail(email: string, source: string = 'popup') {
  if (!supabase) {
    console.warn('Supabase not configured — email not saved');
    return { success: true, duplicate: false };
  }

  const { error } = await supabase
    .from('email_subscribers')
    .insert([{ email, source, subscribed_at: new Date().toISOString() }]);

  if (error) {
    if (error.code === '23505') {
      return { success: true, duplicate: true };
    }
    throw error;
  }

  return { success: true, duplicate: false };
}
