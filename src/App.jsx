import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { exchangeCodeForToken } from "./api/auth.api";
import ConnectTikTok from "./components/ConnectTikTok";
import AdForm from "./components/AdForm";
import ErrorBanner from "./components/ErrorBanner";

function App() {
  const { token, login, logout } = useContext(AuthContext);
  const [globalError, setGlobalError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code && !token) {
      exchangeCodeForToken(code)
        .then((res) => login(res.access_token))
        .catch(() =>
          setGlobalError("OAuth failed. Please try again.")
        );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="relative mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center ">TikTok Ads Creative</h2>
          {token && (
            <button
              onClick={logout}
              className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors hover:cursor-pointer"
            >
              Logout
            </button>
          )}
        </div>

        {globalError && <ErrorBanner message={globalError} />}

        {!token ? <ConnectTikTok /> : <AdForm />}
      </div>
    </div>
  );
}

export default App;
