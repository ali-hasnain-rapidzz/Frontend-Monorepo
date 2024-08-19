/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use client";

import WelcomeMessage from "@Components/home";
import Navbar from "@ParentPackage/components/Navbar";

const MyApp = () => {
  return (
    <>
      <Navbar />
      <WelcomeMessage />
    </>
  );
};

export default MyApp;
