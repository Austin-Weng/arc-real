import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jcfexxvddfmhswglqxeb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjZmV4eHZkZGZtaHN3Z2xxeGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NDI3MTYsImV4cCI6MjAyOTExODcxNn0.qn3N0jdPDQFPHInji7oc3HN_nctjRy0wu44r2RJwC8I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

