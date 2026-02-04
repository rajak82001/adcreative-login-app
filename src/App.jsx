import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout";
import ErrorBanner from "./components/ErrorBanner";
import ProtectedRoute from "./components/ProtectedRoute";

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
        <Route
          path="/create-ad"
          element={
            <ProtectedRoute>
              <CreateAd />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
