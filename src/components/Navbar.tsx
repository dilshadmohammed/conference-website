import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
    <div className="flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <h1></h1>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/committe" className="text-white hover:text-gray-300">
            Committe
          </Link>
        </li>
        <li>
          <Link to="/speaker" className="text-white hover:text-gray-300">
            Speakers
          </Link>
        </li>
        <li>
          <Link to="/registration" className="text-white hover:text-gray-300">
            Registration
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar