// export default function Header() {
//   return (
//     <header className="sticky flex justify-between items-center p-4 shadow-md bg-pink-100">
//       <h1 className="text-2xl font-bold text-pink-600">MatrimonyHub</h1>
//       <nav className="space-x-6 text-gray-800">
//         <a href="">Home</a>
//         <a href="#">About us</a>
//         <a href="#">Contact</a>
//       </nav>
//     </header>
//   );
// }
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pink-100 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-600">MatrimonyHub</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-800">
          <a href="#" className="hover:text-pink-600">Home</a>
          <a href="#" className="hover:text-pink-600">About Us</a>
          <a href="#" className="hover:text-pink-600">Contact</a>
          <button className="text-pink-700 border border-pink-600 px-4 py-1 rounded hover:bg-pink-100">
            Login
          </button>
          <button className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700">
            Register Free
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-50 px-4 pb-4 space-y-2 text-gray-800">
          <a href="#" className="block hover:text-pink-600">Home</a>
          <a href="#" className="block hover:text-pink-600">About Us</a>
          <a href="#" className="block hover:text-pink-600">Contact</a>
          <button className="block w-full text-left text-pink-700 border border-pink-600 px-4 py-1 rounded hover:bg-pink-100">
            Login
          </button>
          <button className=" cursor-pointer block w-full text-left bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700">
            Register Free
          </button>
        </div>
      )}
    </header>
  );
}

