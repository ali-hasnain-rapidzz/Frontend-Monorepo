"use client";

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { useRegisterMutation } from "@Redux/api/authApiSlice";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
  password: string;
}

interface SignUpContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  buttonDisabled: boolean;
  loading: boolean;
  onSignUp: () => void;
}

const SignUpContext = createContext<SignUpContextProps | undefined>(undefined);

export const SignUpProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // To handle error messages
  const navigate = useNavigate();
  const [register] = useRegisterMutation();

  const onSignUp = async () => {
    try {
      setLoading(true);
      setErrorMessage(null);

      const response = await register(user).unwrap();

      console.log("Signup successful", response);

      navigate("/login");
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Failed to sign up the user");
      console.error("Failed to sign up the user", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.name && user.email && user.password) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <SignUpContext.Provider value={{ user, setUser, buttonDisabled, loading, onSignUp }}>
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => {
  const context = useContext(SignUpContext);
  if (context === undefined) {
    throw new Error("useSignUp must be used within a SignUpProvider");
  }
  return context;
};
