import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../store/auth-context';

const Navbar = () => {
  const {isAuthenticated} = useContext(authContext)
  return (
    <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/professional-logo-design-template-247d2816641c3c02c30a3f1461b9c70f_screen.jpg?ts=1627632113" alt="Logo" className="h-8 mr-4" />
        <span className="text-white text-xl font-semibold">ProFessional</span>
      </div>

      {/* Navigation links */}
      <ul className="flex items-center space-x-6">
        <li>
          <NavLink  to="/" className="text-white hover:text-gray-300" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-white hover:text-gray-300" >About</NavLink>
        </li>
        <li>
          <NavLink to="/services" className="text-white hover:text-gray-300" >Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-white hover:text-gray-300" >Contact</NavLink>
        </li>
   {isAuthenticated ?  <li>
          <NavLink to="/logout" className="text-white hover:text-gray-300" >Logout</NavLink>
        </li>:
        <>
        <li>
          <NavLink to="/register" className="text-white hover:text-gray-300" >Register</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="text-white hover:text-gray-300" >Login</NavLink>
        </li>
        </>
        }

      </ul>
    </nav>
  );
};

export default Navbar;
