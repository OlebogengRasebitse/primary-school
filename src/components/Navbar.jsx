import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-white z-50 shadow">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10 object-contain mt-3"
            src="/Logo.jpg"
            alt="Logo"
          />
          <span className="font-bold text-gray-800 text-xl">Tsitsing Primary School</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-semibold text-sm">
          {navLinks()}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-semibold text-sm">
            {navLinks(() => setIsOpen(false))}
          </ul>
        </div>
      )}
    </div>
  );
}

{/* Navigation Links (for mobile & desktop)*/ }
const navLinks = (onClick = () => { }) => (
  <>
        {/* <ul className="flex space-x-6 text-gray-700 font-semibold text-sm"> */}
          <li>
            <NavLink
              to="/"
                onClick={onClick}
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
                onClick={onClick}
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
                onClick={onClick}
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
                onClick={onClick}
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
                onClick={onClick}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "hover:underline"
              }
            >
              Contact
            </NavLink>
        </li>
    </>
);

export default Navbar;

