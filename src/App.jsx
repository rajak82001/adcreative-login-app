import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ConnectTikTok from "./pages/ConnectTikTok";
import TikTokCallback from "./pages/TikTokCallback";
import CreateAd from "./pages/CreateAd";
import ErrorBanner from "./components/ErrorBanner";
import { useState } from "react";

export default function App() {
  const [globalError, setGlobalError] = useState(null);

  return (
    <Layout>
      {globalError && <ErrorBanner message={globalError} />}

      <Routes>
        <Route path="/" element={<ConnectTikTok />} />

        <Route
          path="/auth/tiktok/callback"
          element={<TikTokCallback setGlobalError={setGlobalError} />}
        />

        <Route path="/create-ad" element={<CreateAd />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
