import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout";
import ErrorBanner from "./components/ErrorBanner";

import Home from "./pages/ConnectTikTok"; // Home = Connect TikTok page
import OAuthCallback from "./pages/TikTokCallback";
import CreateAd from "./pages/CreateAd";

function App() {
  const [globalError, setGlobalError] = useState(null);

  return (
    <Layout>
      {/* Global system-level errors (OAuth, geo, permissions, etc.) */}
      {globalError && (
        <ErrorBanner
          message={globalError}
          onClose={() => setGlobalError(null)}
        />
      )}

      <Routes>
        {/* Step 1: Connect TikTok */}
        <Route path="/" element={<Home />} />

        {/* Step 2: TikTok OAuth callback */}
        <Route
          path="/auth/tiktok/callback"
          element={<OAuthCallback setGlobalError={setGlobalError} />}
        />

        {/* Step 3: Create Ad (after successful OAuth) */}
        <Route path="/create-ad" element={<CreateAd />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>

    // import { useContext, useEffect, useState } from "react";
    // import { Routes, Route, Navigate } from "react-router-dom";
    // import { AuthContext } from "./context/AuthContext";
    // import Layout from "./components/Layout";
    // import Home from "./pages/Home";
    // import CreateAd from "./components/AdForm";
    // import OAuthCallback from "./pages/TikTokCallback";
    // import ErrorBanner from "./components/ErrorBanner";

    // import ConnectTikTok from "./pages/ConnectTikTok";
    // import TikTokCallback from "./pages/TikTokCallback";
    // import CreateAd from "./pages/CreateAd";

    // function App() {
    //   const { token, login, logout } = useContext(AuthContext);
    //   const [globalError, setGlobalError] = useState("");

    //   useEffect(() => {
    //     // Keep App-level side effects minimal; callback route handles token exchange.
    //   }, []);

    //   return (
    //     <Layout>
    //       {globalError && <ErrorBanner message={globalError} />}
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/oauth/callback" element={<OAuthCallback />} />
    //         <Route path="/create-ad" element={<CreateAd />} />
    //         <Route path="*" element={<Navigate to="/" replace />} />
    //       </Routes>
    //     </Layout>

    // ------------------------------------------------------------------------------------------------------------------>
    //  Step - 5
    //  <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<ConnectTikTok />} />
    //     <Route path="/tiktok/callback" element={<TikTokCallback />} />
    //     <Route path="/create-ad" element={<CreateAd />} />
    //   </Routes>
    // </BrowserRouter>
    // ------------------------------------------------------------------------------------------------------------------>
  );
}

export default App;
