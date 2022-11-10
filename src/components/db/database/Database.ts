import { createClient } from "@supabase/supabase-js";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdGFzdGduc3hycndybmp6Z2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgwODk2NjQsImV4cCI6MTk4MzY2NTY2NH0.DvGazVqaBOpzkDoz1qE5zZywhqSm8gmmT0JAlMxPPNo";
const supabaseUrl = "https://yqtastgnsxrrwrnjzgke.supabase.co";
export const supabase = createClient(supabaseUrl, supabaseKey);
