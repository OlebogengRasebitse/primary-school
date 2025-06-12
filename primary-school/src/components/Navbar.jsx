import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white h-100 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center h-full px-4">

          <div className="flex items-center space-x-3">
            <img
              className="h-10 w-10 object-contain"
              src="https://z-p3-scontent.fjnb11-1.fna.fbcdn.net/v/t39.30808-6/480738688_983007910593974_8569391548694603861_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=cUGwS3ae5ToQ7kNvwEDOAGF&_nc_oc=Adn26M9l3VsgeBeXgnXZrRjbqs2YzZ6EqbwqQJ4ToRB1sYmmmooSJSrJCCDeiBgJpiM&_nc_zt=23&_nc_ht=z-p3-scontent.fjnb11-1.fna&_nc_gid=CDBOUrpCEIByjiai20gH8Q&oh=00_AfOgpX04lj9g8xun1FMM0ogznW6kAnfvZvFnehQ794lDqw&oe=68472413"
              alt="Logo"
            />
            <span className="font-bold text-gray-800 text-xl">Tsitsing Primary School</span>
          </div>

          <nav
            className="fixed top-1 left-0 right-0 h-12 z-40"
            style={{
              backgroundImage: 'url("/path-to-your-hero-image.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >

          </nav>
          {/* Right side: telephone number */}
         <>
      
    </>
        </div>
      </div>
      {/* Padding so content is below fixed bar */}
      <div className="pt-10">
        <div className="container mx-auto h-full flex justify-end px-10 py-4">
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
    </>
  );
}

export default Navbar;
