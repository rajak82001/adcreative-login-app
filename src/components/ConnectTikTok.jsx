import { redirectToTikTok } from "../api/tiktokOAuth";

const ConnectTikTok = () => {
  return (
    <div className="flex justify-center">
      <button
        onClick={redirectToTikTok}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium cursor-pointer"
      >
        Connect Ads Account
      </button>
    </div>
  );
};

export default ConnectTikTok;
