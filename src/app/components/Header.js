"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-600">MatrimonyHub</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-gray-800">
          <a href="#" className="hover:text-pink-600 transition">Home</a>
          <a href="#" className="hover:text-pink-600 transition">About Us</a>
          <a href="#" className="hover:text-pink-600 transition">Contact</a>
          <a href="#" className="text-pink-700 border border-pink-600 px-4 py-1 rounded hover:bg-pink-100 transition">
            Login
          </a>
          <a href="#" className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700 transition">
            Register Free
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-pink-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-50 px-4 py-4 space-y-3 text-gray-800 transition-all">
          <a href="#" onClick={closeMenu} className="block py-1 border-b border-pink-100 hover:text-pink-600 transition">Home</a>
          <a href="#" onClick={closeMenu} className="block py-1 border-b border-pink-100 hover:text-pink-600 transition">About Us</a>
          <a href="#" onClick={closeMenu} className="block py-1 border-b border-pink-100 hover:text-pink-600 transition">Contact</a>
          <a href="#" onClick={closeMenu} className="block py-1 border-b border-pink-100 hover:text-pink-600 transition">Login</a>
          <a href="#" onClick={closeMenu} className="block py-1 hover:text-pink-600 transition">Register Free</a>
        </div>
      )}
    </header>
  );
}
