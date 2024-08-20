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
