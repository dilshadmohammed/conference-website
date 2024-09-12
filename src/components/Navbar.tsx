import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 sticky top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center py-3 px-8">
        <div>
          <img src="/nssce_logo.svg" alt="nssce_logo" />
        </div>
        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
          {isMenuOpen && (
            <ul className="absolute top-full right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg text-white text-base">
              <li>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-600">
                  About
                </Link>
              </li>
              <li className="relative group">
                <div className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                  Committe
                </div>
                <ul className="absolute left-[-12rem] top-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <li>
                    <Link to="/committe/organizing" className="block px-4 py-2 hover:bg-gray-600">
                      Organizing Committee
                    </Link>
                  </li>
                  <li>
                    <Link to="/committe/advisory" className="block px-4 py-2 hover:bg-gray-600">
                      Advisory Committee
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/speakers" className="block px-4 py-2 hover:bg-gray-600">
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/registration" className="block px-4 py-2 hover:bg-gray-600">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block px-4 py-2 hover:bg-gray-600">
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
        <ul className="hidden md:flex md:space-x-14 text-white text-xl font-medium items-center">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li className="relative group">
            <div className="hover:text-gray-300">Committe</div>
            <ul className="absolute left-0 mt-2 font-thin text-base whitespace-nowrap space-y-2 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <li>
                <Link to="/committe/organizing" className="block px-4 py-2 text-white hover:bg-gray-600">
                  Organizing Committee
                </Link>
              </li>
              <li>
                <Link to="/committe/advisory" className="block px-4 py-2 text-white hover:bg-gray-600">
                  Advisory Committee
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/speakers" className="hover:text-gray-300">
              Speakers
            </Link>
          </li>
          <li>
            <Link to="/registration" className="hover:text-gray-300">
              Registration
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
