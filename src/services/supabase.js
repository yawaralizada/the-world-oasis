import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hyyxwkgiwaqcmijdrzxs.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5eXh3a2dpd2FxY21pamRyenhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNzcxNTMsImV4cCI6MjAyNDk1MzE1M30.v1fwrn103g0-chdyi6Zo-d9Xv_pRG7YHFjWHCMD0XGU`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
