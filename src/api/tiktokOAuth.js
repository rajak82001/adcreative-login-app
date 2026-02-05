// step-1

const CLIENT_KEY = "awn2wg5bhdlljzqu";
// const REDIRECT_URI = "https://rajak82001.github.io/adcreative-login-app/tiktok/callback/";
const REDIRECT_URI = "https://rajak82001.github.io/adcreative-login-app/auth/tiktok/callback/";


export function redirectToTikTok() {
  const state = Math.random().toString(36).substring(2);
  localStorage.setItem("tt_state", state);

  const url =
    "https://www.tiktok.com/v2/auth/authorize/?" +
    `client_key=${CLIENT_KEY}` +
    `&response_type=code` +
    `&scope=user.info.basic` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&state=${state}`;

  window.location.href = url;
}

// Mocked token exchange (allowed by assignment)
export function exchangeCodeForTokenMock(code) {
  if (!code) {
    return { error: "invalid_grant" };
  }

  return {
    access_token: "mock_access_token_123",
    // expires_in: 86400
    expires_in: 86400 // 1 day
  };
}
