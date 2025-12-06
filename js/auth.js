// Authentication and page protection functions

// Check if user is authenticated, redirect to login if not
async function requireAuth() {
    const session = await checkAuth();
    if (!session) {
        window.location.href = "login.html";
        return false;
    }
    return true;
}

// Check authentication on page load for protected pages
async function initAuth() {
    const session = await checkAuth();
    if (!session) {
        window.location.href = "login.html";
    }
    return session;
}

// Redirect to dashboard if already logged in (for login/register pages)
async function redirectIfAuthenticated() {
    const session = await checkAuth();
    if (session) {
        window.location.href = "user_dashboard.html";
    }
}
