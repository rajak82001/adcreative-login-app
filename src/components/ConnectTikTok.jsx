const ConnectTikTok = () => {
  const handleConnect = () => {
    // Mock OAuth redirect
    window.location.href = "/?code=mock_code_123";
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleConnect}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium hover:cursor-pointer"
      >
        Connect TikTok Ads
      </button>
    </div>
  );
};

export default ConnectTikTok;
