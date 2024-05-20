import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ydelovvqqcyncppbgqnc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkZWxvdnZxcWN5bmNwcGJncW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyMTk1MjUsImV4cCI6MjAzMTc5NTUyNX0.DHiuA1uCaA4TB3yAooT3zXJn0-ft0TpoVkXCVuFz9mI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
