const ConnectTikTok = () => {
  const handleConnect = () => {
    const state = Math.random().toString(36).substring(2, 15);
    localStorage.setItem("tiktok_oauth_state", state);

    const url =
      "https://www.tiktok.com/v2/auth/authorize/?" +
      `client_key=awn2wg5bhdlljzqu` +
      `&response_type=code` +
      `&scope=ads_management,ads_read` +
      `&redirect_uri=http://localhost:5173/adcreative-login-app/tiktok/callback` +
      `&state=${state}`;

    window.location.href = url;
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleConnect}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium cursor-pointer"
      >
        Connect Ads Account
      </button>
    </div>
  );
};

export default ConnectTikTok;
