import { createClient } from "@supabase/supabase-js";

export const useServerSupabase = () => {
    const config = useRuntimeConfig();
    return createClient(config.supabaseUrl, config.supabaseSecretKey);
};