import { useServerSupabase } from "../lib/supabase";

export default defineEventHandler(async () => {
    const supabase = useServerSupabase();

    const { data, error } = await supabase.from('posts').select('*');

    if (error) {
        console.error(error.message);
        throw createError({
            statusCode: 500,
            statusMessage: 'DB fetch err'
        });
    }

    return data;
});