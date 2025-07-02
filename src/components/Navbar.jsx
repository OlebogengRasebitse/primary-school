import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10 object-contain"
            src="https://z-p3-scontent.fjnb12-1.fna.fbcdn.net/v/t39.30808-6/482057494_3673300822961008_3809006349011660791_n.jpg?stp=dst-jpg_tt6&cstp=mx1822x2048&ctp=s565x565&_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=Upbq-8HUdI0Q7kNvwFN4mQn&_nc_oc=AdkeQ1-gxKhqruWcghlSzl40cfprl6DMp2UMyIC2-2LRgpMteze5MtRJXG2QA_h8BYU&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb12-1.fna&_nc_gid=Jg5WRhsGU7jM33x448jyyw&oh=00_AfNU_Wjm2yQVyAxmd9cD_irHK07CIJItG6nNG1ilAfSnng&oe=686A0333"
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

