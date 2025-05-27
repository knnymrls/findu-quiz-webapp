import React, { useState } from 'react';
import FindULogo from './FindULogo';
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside the menu area
  const handleOverlayClick = () => setIsMenuOpen(false);

  // Prevent clicks inside menu from closing it
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <nav className="fixed top-0 px-4 lg:px-0 left-0 right-0 w-full flex justify-center py-3 lg:py-6 z-50">
      <div className="flex items-center justify-between w-full lg:max-w-[690px] border-[1px] border-border dark:border-border-dark bg-surfaceContain dark:bg-surfaceContain-dark rounded-full px-6 py-3">
        {/* Logo */}
        <div className="flex items-center font-bold text-2xl select-none">
          <FindULogo className="h-[24px]" />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-9">
          <a href="https://joinfindu.com/students" className="text-secondary dark:text-secondary-dark font-sans font-medium hover:text-black transition">
            Students
          </a>
          <a href="#" className="text-secondary dark:text-secondary-dark font-sans font-medium hover:text-black transition">
            Parents
          </a>
          <a href="#" className="text-secondary dark:text-secondary-dark font-sans font-medium hover:text-black transition">
            Schools
          </a>
        </div>

        {/* Desktop Join Button */}
        <a
          href="#"
          className="hidden lg:flex px-6 py-3 font-sans rounded-full bg-onSurface dark:bg-onSurface-dark text-surface dark:text-surface-dark font-semibold shadow transition text-sm"
        >
          Join FindU
        </a>

        {/* Hamburger Menu Button - only mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay (invisible, closes menu on click) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-transparent lg:hidden"
          onClick={handleOverlayClick}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`absolute right-0 top-[90px] w-fit max-w-[690px] mx-4 rounded-2xl  bg-surfaceContain dark:bg-surfaceContain-dark border-[1px] border-border dark:border-border-dark lg:hidden z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={stopPropagation}
      >
        <div className="px-6 py-4 flex flex-col items-end gap-2">
          <a href="https://joinfindu.com/students" className="text-secondary dark:text-secondary-dark font-sans font-medium hover:text-black transition py-2">Students</a>
                        <a href="#" className="text-secondary dark:text-secondary-dark font-sans font-medium hover:text-black transition py-2">Parents</a>
                        <a href="#" className="text-secondary dark:text-secondary-dark font-sans font-medium hover:text-black transition py-2">Schools</a>
                        <a href="#" className="px-6 py-3 rounded-full bg-onSurface dark:bg-onSurface-dark w-fit font-sans text-surface dark:text-surface-dark font-semibold shadow transition text-sm text-center">Join FindU</a>
        </div>
      </div>
    </nav>
  );
}