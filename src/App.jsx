import React from "react";

import Navbar from "./components/Navabar";

import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto w-full">
        <Navbar />
        <ScrollToTop />
        <Outlet />
        <Footer />
        <BottomNav />
      </div>
    </div>
  );
}
