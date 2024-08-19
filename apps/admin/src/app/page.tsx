'use client';
import WelcomeMessage from '@Components/home';
import Navbar from '@ParentPackage/components/Navbar';

function MyApp() {
  return (
    <>
      <Navbar />
      <WelcomeMessage />
    </>
  );
}

export default MyApp;
