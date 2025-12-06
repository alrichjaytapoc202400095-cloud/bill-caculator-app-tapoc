// Supabase Configuration
// Note: Replace YOUR_SUPABASE_ANON_KEY with your actual anon key from Supabase dashboard
const supabaseUrl = "https://vnazanftvldhgoggasez.supabase.co";
const supabaseKey = "sb_publishable_M8qb3q2WAWGpOMMgHC3LRA_fXrWki_B";

// Create Supabase client (supabase is available globally from CDN)
const { createClient } = supabase;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// Authentication helper functions
async function checkAuth() {
    const {
        data: { session },
        error,
    } = await supabaseClient.auth.getSession();
    if (error) {
        console.error("Error checking auth:", error);
        return null;
    }
    return session;
}

async function getCurrentUser() {
    const {
        data: { user },
        error,
    } = await supabaseClient.auth.getUser();
    if (error) {
        console.error("Error getting user:", error);
        return null;
    }
    return user;
}

async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error("Error signing out:", error);
        return false;
    }
    return true;
}