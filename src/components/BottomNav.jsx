"use client";

import { motion } from "framer-motion";
import { Home, FileQuestion, BookOpen, Newspaper, Info } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  const tabs = [
    { id: 1, icon: Home, label: "Home", path: "/" },
    { id: 2, icon: FileQuestion, label: "Quiz", path: "/quizes" },
    { id: 3, icon: BookOpen, label: "Courses", path: "/courses" },
    { id: 4, icon: Newspaper, label: "Blog", path: "/blog" },
    { id: 5, icon: Info, label: "About", path: "/about" },
  ];

  const [active, setActive] = useState(1);

  return (
    <div className="fixed bottom-0   bg-sky-100   left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
      <div className="bg-white shadow-xl h-20 w-full max-w-md  flex items-center relative overflow-hidden">
        <div className="flex justify-between w-full relative">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActive(tab.id);
                  navigate(tab.path); // 🔥 navigation for pure react
                }}
                className="relative flex flex-col items-center justify-center w-full"
              >
                {/* Icon */}
                <motion.div
                  className="relative z-20"
                  animate={{
                    scale: isActive ? 1.25 : 1,
                    y: isActive ? -8 : 0,
                    color: isActive ? "#1d4ed8" : "#6b7280",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Icon size={26} />
                </motion.div>

                {/* Label */}
                <motion.span
                  className="text-xs mt-1 font-medium"
                  animate={{
                    opacity: isActive ? 1 : 1,
                    y: isActive ? 1 : 4,
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    color: isActive ? "#1d4ed8" : "#6b7280",
                  }}
                >
                  {tab.label}
                </motion.span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
