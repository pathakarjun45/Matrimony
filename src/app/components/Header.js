export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-pink-100">
      <h1 className="text-2xl font-bold text-pink-600">MatrimonyHub</h1>
      <nav className="space-x-6 text-gray-800">
        <a href="">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
