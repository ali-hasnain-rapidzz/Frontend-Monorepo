"use client";

import React from "react";

import { useSignUp } from "@App/pages/sign-up/signup.context";
import InputField from "@Components/inputField";

const SignUpComponent: React.FC = () => {
  const { user, setUser, buttonDisabled, loading, onSignUp } = useSignUp();

  return (
    <div className="signup">
      <h1 className="signup__title">{loading ? "Processing..." : "Free Sign Up"}</h1>

      <InputField
        id="name"
        type="text"
        value={user.name}
        onChange={(value) => setUser({ ...user, name: value })}
        placeholder="Your name..."
        className="signup__input"
      />

      <InputField
        id="email"
        type="text"
        value={user.email}
        onChange={(value) => setUser({ ...user, email: value })}
        placeholder="Your Email..."
        className="signup__input"
      />

      <InputField
        id="password"
        type="password"
        value={user.password}
        onChange={(value) => setUser({ ...user, password: value })}
        placeholder="Your Password..."
        className="signup__input"
      />

      <button onClick={onSignUp} className="signup__button" disabled={buttonDisabled}>
        {buttonDisabled ? "Sign Up" : "Register My Account Now"}
      </button>
    </div>
  );
};

export default SignUpComponent;
