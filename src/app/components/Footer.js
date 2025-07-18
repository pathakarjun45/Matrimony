export default function Footer() {
  return (
    <footer className="bg-pink-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 MatrimonyHub. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Home</a>
           <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline"> About Us</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy & Policy</a>
        </div>
      </div>
    </footer>
  );
}
