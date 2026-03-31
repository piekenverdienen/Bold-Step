import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function subscribeEmail(email: string, source: string = 'popup') {
  const { error } = await supabase
    .from('email_subscribers')
    .insert([{ email, source, subscribed_at: new Date().toISOString() }]);

  if (error) {
    // Handle duplicate email gracefully
    if (error.code === '23505') {
      return { success: true, duplicate: true };
    }
    throw error;
  }

  return { success: true, duplicate: false };
}
