import React from "react";

import Navbar from "./components/Navabar";

import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto w-full">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
