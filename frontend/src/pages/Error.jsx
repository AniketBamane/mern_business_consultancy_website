import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-red-500 mb-8">404 Error: Page Not Found</h1>
      <p className="text-xl text-gray-700 mb-8">The page you are looking for is not available.</p>
      <div className="flex space-x-4">
        <NavLink to="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Return to Home</NavLink>
        <NavLink to="/contact" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600">Report a Problem</NavLink>
      </div>
    </div>
  );
};

export default Error;
