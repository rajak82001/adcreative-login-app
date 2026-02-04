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
    const state = params.get("state");
    const errorParam = params.get("error");

    const savedState = localStorage.getItem("tt_state");

    //  User denied or TikTok returned an error
    if (errorParam) {
      setGlobalError(mapTikTokError(errorParam));
      navigate("/");
      return;
    }

    //  CSRF / invalid session
    if (!code || state !== savedState) {
      setGlobalError("Invalid login session. Please try again.");
      navigate("/");
      return;
    }

    //  Mocked token exchange (assignment scope)
    const data = exchangeCodeForTokenMock(code);

    if (data.error) {
      setGlobalError(mapTikTokError(data.error));
      navigate("/");
      return;
    }

    //  Success
    localStorage.setItem("tt_access_token", data.access_token);
    navigate("/create-ad");
  }, [navigate, setGlobalError]);

  return <p>Connecting your TikTok account…</p>;
}
