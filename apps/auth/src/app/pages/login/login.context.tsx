"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { useLoginMutation } from "@Redux/api/authApiSlice";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
}

interface LoginContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  buttonDisabled: boolean;
  loading: boolean;
  onLogin: () => void;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

export const LoginProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({ email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const [login] = useLoginMutation();

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await login(user).unwrap();
      console.log("Login successful", response);
      localStorage.setItem("token", response.token);
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(!(user.email.length > 0 && user.password.length > 0));
  }, [user]);

  return (
    <LoginContext.Provider value={{ user, setUser, buttonDisabled, loading, onLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};
