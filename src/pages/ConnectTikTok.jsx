import { redirectToTikTok } from "../api/tiktokOAuth";

export default function ConnectTikTok() {
  return (
    <div className="flex justify-center flex-col items-center gap-6">
      <h2 className="text-2xl text-center font-bold">Connect TikTok Ads Account</h2>
      <button onClick={redirectToTikTok} className=" mt-4 px-6 py-3 bg-blue-800 text-white rounded hover:bg-blue-700 transition duration-200 cursor-pointer">
        Connect TikTok
      </button>
    </div>
  );
}
