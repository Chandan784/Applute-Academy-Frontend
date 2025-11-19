import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ import Link


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 

  // Update links with route paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Quiz", path: "/quizes" },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/aalogo.png"
            alt="Applute Academy Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-9 text-[15px] font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path} // ✅ use Link instead of a
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
  
        <button
        className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full 
              w-[80%] max-w-[340px]
              bg-white z-[100]
              shadow-2xl rounded-l-2xl 
              p-6 flex flex-col
            "
          >
            {/* Header Row */}
           <div className="flex justify-between items-center mb-10">
              <img src="/aalogo.png" alt="Applute Academy Logo" className="h-10" />
              <button onClick={() => setIsOpen(false)}>
                <X size={28} className="text-gray-800" />
              </button>
            </div> 

            <ul className="flex flex-col gap-8 text-lg font-semibold text-gray-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path} // ✅ use Link for mobile too
                    className="hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
