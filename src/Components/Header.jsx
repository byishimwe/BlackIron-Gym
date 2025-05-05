import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="logo flex items-center space-x-3">
          <img src="../public/logo.png" alt="Logo" className="w-12 h-12 object-cover" />
          <h1 className="text-2xl font-semibold">BlackIron Gym</h1>
        </div>

        {/* Menu Section */}
        <div className="menu hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-400 focus:outline-none">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 focus:outline-none">About</Link>
            </li>
            <li>
              <Link to="/classes" className="hover:text-blue-400 focus:outline-none">Classes</Link>
            </li>
            <li>
              <Link to="/trainers" className="hover:text-blue-400 focus:outline-none">Trainers</Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-blue-400 focus:outline-none">Pricing</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 focus:outline-none">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl text-white">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block text-white hover:text-blue-700">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block text-white hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link to="/classes" className="block text-white hover:text-blue-400">Classes</Link>
            </li>
            <li>
              <Link to="/trainers" className="block text-white hover:text-blue-400">Trainers</Link>
            </li>
            <li>
              <Link to="/pricing" className="block text-white hover:text-blue-400">Pricing</Link>
            </li>
            <li>
              <Link to="/contact" className="block text-white hover:text-blue-400">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;