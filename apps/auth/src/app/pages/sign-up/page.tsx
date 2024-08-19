'use client';

import React from 'react';
import { SignUpProvider } from '@App/pages/sign-up/signup.context';
import SignUpComponent from '@Pages/sign-up/signup.view';

export default function SignUpPage() {
  return (
    <SignUpProvider>
      <SignUpComponent />
    </SignUpProvider>
  );
}
