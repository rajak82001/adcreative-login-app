import { useContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { exchangeCodeForToken } from "./api/auth.api";
import ConnectTikTok from "./components/ConnectTikTok";
import AdForm from "./components/AdForm";
import ErrorBanner from "./components/ErrorBanner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

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
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gray-100 py-8 flex flex-col">
          <div className="container mx-auto px-4 max-w-4xl flex-1">
            <div className="relative mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center ">AdCreative Login App</h2>
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

          {/* Footer with Legal Links */}
          <div className="mt-12 border-t border-gray-300 pt-8">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <p className="text-gray-600 mb-4">© 2026 AdCreative Login App</p>
              <div className="flex justify-center gap-6 text-sm">
                <Link 
                  to="/privacy" 
                  className="text-black hover:underline font-medium"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-400">|</span>
                <Link 
                  to="/terms" 
                  className="text-black hover:underline font-medium"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      } />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}

export default App;
