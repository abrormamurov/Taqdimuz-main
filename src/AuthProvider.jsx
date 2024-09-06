import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("authToken") || ""
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("authToken", authToken);
  }, [authToken]);

  const login = (token) => {
    setAuthToken(token);
    navigate("/");
  };

  const logout = () => {
    setAuthToken("");
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
