import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { exchangeCodeForToken } from "../api/auth.api";

const ConnectTikTok = () => {
  const { login } = useContext(AuthContext);

  const handleConnect = async () => {
    // Mock OAuth - directly exchange code without redirect
    try {
      const res = await exchangeCodeForToken("mock_code_123");
      login(res.access_token);
    } catch (error) {
      console.error("OAuth failed:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleConnect}
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium hover:cursor-pointer"
      >
        Connect Ads Account
      </button>
    </div>
  );
};

export default ConnectTikTok;
