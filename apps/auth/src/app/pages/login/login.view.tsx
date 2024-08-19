'use client';

import React from 'react';
import { useLogin } from '@Pages/login/login.context';
import InputField from '@Components/inputField';

const LoginComponent: React.FC = () => {
  const { user, setUser, buttonDisabled, loading, onLogin } = useLogin();

  return (
    <div className="login">
      <h1 className="login__title">
        {loading ? "We're logging you in..." : 'Account Login'}
      </h1>

      <InputField
        id="email"
        type="text"
        value={user.email}
        onChange={(value) => setUser({ ...user, email: value })}
        placeholder="Your Email..."
        className="login__input"
      />

      <InputField
        id="password"
        type="password"
        value={user.password}
        onChange={(value) => setUser({ ...user, password: value })}
        placeholder="Your Password..."
        className="login__input"
      />

      <button
        onClick={onLogin}
        className="login__button"
        disabled={buttonDisabled}
      >
        Login
      </button>
    </div>
  );
};

export default LoginComponent;
