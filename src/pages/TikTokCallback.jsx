// step - 3 (OAuth Callback Handler)

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { exchangeCodeForTokenMock } from "../api/tiktokOAuth";
import { mapTikTokError } from "../utils/errorMapper";

export default function TikTokCallback({ setGlobalError }) {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");
    const errorParam = params.get("error");

    // Only REAL TikTok error
    if (errorParam) {
      setGlobalError(mapTikTokError(errorParam));
      navigate("/");
      return;
    }

    // If code missing, STOP but don't redirect immediately
    if (!code) {
      console.warn("OAuth callback loaded without code");
      return;
    }

    // Mock exchange
    const data = exchangeCodeForTokenMock(code);

    if (data.error) {
      setGlobalError(mapTikTokError(data.error));
      navigate("/");
      return;
    }

    // SUCCESS
    localStorage.setItem("tt_access_token", data.access_token);
    navigate("/create-ad");
  }, [navigate, setGlobalError]);

  return <p>Connecting your TikTok account…</p>;
}
