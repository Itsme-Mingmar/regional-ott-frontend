import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AUTH_STORAGE_KEY = "auth";

const AuthContext = createContext({
  user: null,
  isLoggedIn: false,
  login: () => { },
  logout: () => { },
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed.user);
      } catch (e) {
        console.warn("Failed to parse auth storage", e);
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
  }, []);
  useEffect(() => {
    const syncAuth = () => {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY);

      if (!stored) {
        setUser(null); // 
        return;
      }

      try {
        const parsed = JSON.parse(stored);
        setUser(parsed.user);
      } catch {
        setUser(null);
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    };

    // Listen for changes (works across tabs + manual clear)
    window.addEventListener("storage", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
    };
  }, []);

  const login = (newUser) => {
    setUser(newUser);
    localStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ user: newUser })
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem("pendingSignup");
  };

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: Boolean(user),
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
