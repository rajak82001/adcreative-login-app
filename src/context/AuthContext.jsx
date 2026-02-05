import { createContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const logoutTimer = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("token");
    const expiresAt = parseInt(localStorage.getItem("token_expires_at"), 10);

    if (stored && expiresAt && Date.now() < expiresAt) {
      setToken(stored);
      // schedule auto logout
      const remaining = expiresAt - Date.now();
      logoutTimer.current = setTimeout(() => {
        handleLogout();
      }, remaining);
    } else {
      // clean any stale values
      localStorage.removeItem("token");
      localStorage.removeItem("token_expires_at");
      // remove unused provider token if present
      localStorage.removeItem("tt_access_token");
    }

    setIsInitialized(true);

    return () => {
      if (logoutTimer.current) clearTimeout(logoutTimer.current);
    };
  }, []);

  const handleLogout = () => {
    // Clear token and related keys
    localStorage.removeItem("token");
    localStorage.removeItem("token_expires_at");
    // ensure any leftover provider token is removed
    localStorage.removeItem("tt_access_token");
    localStorage.removeItem("tt_state");
    localStorage.removeItem("tiktok_oauth_state");

    if (logoutTimer.current) {
      clearTimeout(logoutTimer.current);
      logoutTimer.current = null;
    }

    setToken(null);
    // navigate user to connect page (works with HashRouter)
    try {
      navigate("/");
    } catch (e) {
      // fallback: full reload to root
      window.location.href = "/#/";
    }
  };

  const login = (newToken, expiresInSeconds) => {
    if (!newToken) return;
    localStorage.setItem("token", newToken);
    setToken(newToken);

    if (expiresInSeconds && Number(expiresInSeconds) > 0) {
      const expiresAt = Date.now() + Number(expiresInSeconds) * 1000;
      localStorage.setItem("token_expires_at", String(expiresAt));

      // clear existing timer
      if (logoutTimer.current) clearTimeout(logoutTimer.current);

      logoutTimer.current = setTimeout(() => {
        handleLogout();
      }, Number(expiresInSeconds) * 1000);
    } else {
      localStorage.removeItem("token_expires_at");
      if (logoutTimer.current) {
        clearTimeout(logoutTimer.current);
        logoutTimer.current = null;
      }
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout: handleLogout, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};
