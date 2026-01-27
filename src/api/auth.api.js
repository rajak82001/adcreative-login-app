export const exchangeCodeForToken = async (code) => {
  if (!code) throw new Error("INVALID_CODE");

  return {
    access_token: "mock_tiktok_access_token"
  };
};
