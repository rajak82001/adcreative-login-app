// step - 2

export function mapTikTokError(error, status) {
  if (status === 403) {
    return "TikTok Ads are not available in your region.";
  }

  const map = {
    invalid_client: "Invalid app configuration.",
    invalid_scope: "Ads permission not granted. Please reconnect TikTok.",
    access_denied: "You cancelled TikTok login.",
    invalid_grant: "Login session expired. Please try again.",
    access_token_invalid: "Your session expired. Reconnect TikTok."
  };

  return map[error] || "Something went wrong. Please try again.";
}
