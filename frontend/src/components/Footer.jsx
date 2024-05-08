import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 my-10 mx-10 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Company Name</h2>
          <p className="text-sm">123 Main Street, City, Country</p>
          <p className="text-sm">Phone: +123 456 7890</p>
          <p className="text-sm">Email: info@company.com</p>
        </div>
        {/* Center section */}
        <div className="text-center">
          <h2 className="text-lg font-bold mb-4">Useful Links</h2>
          <ul>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        {/* Right section */}
        <div className="text-center md:text-right">
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-end">
            <a href="#" className="text-gray-400 hover:text-white mx-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white mx-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white mx-2"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
