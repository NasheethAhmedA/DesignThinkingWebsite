import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DesignThinkingLogo from '/assets/DesignThinkingLogo.png';
import KingstonLogo from '/assets/kingston_logo.png';

const MasterLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-around items-center">
        <div className="flex items-center hidden md:flex">
              <img src={DesignThinkingLogo} alt="Logo" className="h-24 w-24" />
            </div>
            <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-blue-800 text-center">Design Thinking Club</span>
            <span className="text-3xl font-bold text-blue-800 text-center hidden md:block">Kingston Engineering College</span>
            </div>
          <div className="hidden md:block">
          <img src={KingstonLogo} alt="Logo" className="h-24" />
          </div>
        </div>
        <Navbar />
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MasterLayout;