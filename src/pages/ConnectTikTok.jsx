import { redirectToTikTok } from "../api/tiktokOAuth";

export default function ConnectTikTok() {
  return (
    <div className="flex justify-center align-middle">
      <h2 className="text-2xl text-center ">Connect TikTok Ads Account</h2>
      <button onClick={redirectToTikTok} className=" mt-4 p-2 bg-blue-500 text-white rounded">
        Connect TikTok
      </button>
    </div>
  );
}
