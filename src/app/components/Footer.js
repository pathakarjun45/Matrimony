import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-pink-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6 md:flex-row justify-between items-center md:items-start">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2025 MatrimonyHub. All rights reserved.</p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="#" className="hover:underline transition">Home</a>
          <a href="#" className="hover:underline transition">About Us</a>
          <a href="#" className="hover:underline transition">Contact</a>
          <a href="#" className="hover:underline transition">Terms & Conditions</a>
          <a href="#" className="hover:underline transition">Privacy Policy</a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex justify-center gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-pink-300 text-xl">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-pink-300 text-xl">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-300 text-xl">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-pink-300 text-xl">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-pink-300 text-xl">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
