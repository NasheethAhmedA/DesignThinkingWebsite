import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GraduationCap } from 'lucide-react';

const MasterLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <GraduationCap className="h-10 w-10 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-blue-800">Design Thinking Club</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-700">UNI</span>
            </div>
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