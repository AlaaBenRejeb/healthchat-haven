// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vlzrnbuzpxzyftardjzc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsenJuYnV6cHh6eWZ0YXJkanpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3ODQ1NDksImV4cCI6MjA1MDM2MDU0OX0.XaYFvhwmhUjN_5-m2liBxOX0AK7NQNVgFuEnvs4aOpQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);