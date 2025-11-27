import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://qlqvchcvuwjnfranqcmx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscXZjaGN2dXdqbmZyYW5xY214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMzg5NDIsImV4cCI6MjA3OTcxNDk0Mn0.qM7hpKn0cu2TA3EAYADyYzOt5x2D4CAbFJTNyXewYWA";

export const supabase = createClient(supabaseUrl, supabaseKey);
