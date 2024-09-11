import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-gray-800 sticky top-0 left-0 right-0 z-50">
    <div className="flex justify-between items-center py-3 px-8">
      <div>
          <img src="src/assets/nssce_logo.svg" alt="nssce_logo" />
      </div>
      <ul className="flex space-x-14 text-white text-xl font-medium items-center">
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
        <li>
          <Link to="/committe" className="hover:text-gray-300">
            Committe
          </Link>
        </li>
        <li>
          <Link to="/speaker" className="text-white hover:text-gray-300">
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
  )
}

export default Navbar