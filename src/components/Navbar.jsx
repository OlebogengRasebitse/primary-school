import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10 object-contain"
            src="/Logo.jpg"
            alt="Logo"
          />
          <span className="font-bold text-gray-800 text-xl">Tsitsing Primary School</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-700 font-semibold text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "hover:underline"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "hover:underline"
              }
            >
              Events Calendar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "hover:underline"
              }
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "hover:underline"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

