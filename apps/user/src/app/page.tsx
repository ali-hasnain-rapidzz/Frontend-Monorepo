
"use client";
import Navbar from '@Shared/Components/Navbar';
import WelcomeMessage from '@Components/home';
import "./globals.css";
function MyApp() {
  return (
    <>
      <Navbar />
      <WelcomeMessage/>
      
    </>
  );
}

export default MyApp;