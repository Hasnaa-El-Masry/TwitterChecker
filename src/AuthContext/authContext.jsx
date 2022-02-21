import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const logout = () => {
    setIsLogin(false);
  };

  const login = () => {
    setIsLogin(true);
  };

  return (
    <AuthContext.Provider value={{isLogin,logout,login}}>{children}</AuthContext.Provider>
  );
};
