import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

interface SubOption {
  name: string;
  subRoute: string;
}

interface MenuItem {
  route: string;
  subOptions: SubOption[];
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems: Record<string, MenuItem> = {
    Home: { route: '/', subOptions: [] },
    About: { route: '/about', subOptions: [] },
    Committe: { 
      route: '/committee', 
      subOptions: [
        { name: 'Organizing Committee', subRoute: '/organizing' },
        { name: 'Advisory Committee', subRoute: '/advisory' },
      ] 
    },
    Speakers: { route: '/speakers', subOptions: [] },
    Registration: { route: '/registration', subOptions: [] },
    Contact: { route: '/contact', subOptions: [] },
  };

  return (
    <nav className="bg-gray-800 sticky top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center py-3 px-8">
        <img src="/nssce_logo.svg" alt="nssce_logo" className='w-20 md:w-28' />

        <div className="md:hidden relative">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
          {isMenuOpen && (
            <ul className="absolute top-full -right-7 mt-2 w-48 bg-gray-700 rounded-md shadow-lg text-white text-base">
              {Object.keys(menuItems).map((item, index) => (
                <li key={index} className="relative group">
                  {menuItems[item].subOptions.length === 0 ? (
                    <Link
                      to={menuItems[item].route}
                      onClick={toggleMenu}
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      {item}
                    </Link>
                  ) : (
                    <div className="px-4 py-2 hover:bg-gray-600 cursor-pointer">
                      {item}
                    </div>
                  )}

                  {menuItems[item].subOptions.length > 0 && (
                    <ul className="absolute left-[-12rem] top-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {menuItems[item].subOptions.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={`${menuItems[item].route}${subItem.subRoute}`}
                            onClick={toggleMenu}
                            className="block px-4 py-2 hover:bg-gray-600"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="hidden md:flex md:space-x-14 text-white text-xl font-medium items-center">
          {Object.keys(menuItems).map((item, index) => (
            <li key={index} className="relative group">
              {menuItems[item].subOptions.length === 0 ? (
                <Link to={menuItems[item].route} className="hover:text-gray-300">
                  {item}
                </Link>
              ) : (
                <div className="hover:text-gray-300 cursor-pointer">{item}</div>
              )}

              {menuItems[item].subOptions.length > 0 && (
                <ul className="absolute left-0 mt-2 font-thin text-base whitespace-nowrap space-y-2 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {menuItems[item].subOptions.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={`${menuItems[item].route}${subItem.subRoute}`}
                        className="block px-4 py-2 text-white hover:bg-gray-600"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
