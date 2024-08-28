"use client";

import { LoginProvider } from "@Pages/login/login.context";
import LoginComponent from "@Pages/login/login.view";
export default function LoginPage() {
  return (
    <LoginProvider>
      <LoginComponent />
    </LoginProvider>
  );
}
