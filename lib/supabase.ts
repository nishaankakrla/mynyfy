
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co'; // Fallback for local dev if needed, typically injected
const supabaseKey = 'your-anon-key';

// Note: In a real environment, these are injected via environment variables.
// For this runtime, we assume standard access to these variables or mock values.
export const supabase = createClient(
  process.env.SUPABASE_URL || supabaseUrl,
  process.env.SUPABASE_ANON_KEY || supabaseKey
);
