import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../store/auth-context';

const About = () => {
  const {user} = useContext(authContext)
  return (
    <div className="h-screen flex flex-col md:flex-row justify-center items-center">
      {/* Information Container */}
      <div className="md:w-1/3 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome {user.name === "" ? "username":user.name}</h1>
        <p className="text-lg text-gray-700 mb-8">Welcome to our business consultancy service. We are here to assist you in achieving your business goals with our expertise and experience. Feel free to reach out to us with any inquiries or assistance you may require.</p>
        <h2 className="text-2xl font-bold text-blue-500 mb-4">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 mb-8">Our business consultancy service stands out due to several key factors:</p>
        <ul className="list-disc text-lg text-gray-700 mb-8">
          <li>Experienced professionals with a track record of success</li>
          <li>Customized solutions tailored to your business needs</li>
          <li>Proven strategies to drive growth and profitability</li>
          <li>Personalized support and guidance throughout your business journey</li>
        </ul>
        <div className="flex space-x-4">
          <NavLink to="/connect" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Connect with Us</NavLink>
          <NavLink to="/learn-more" className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600">Learn More</NavLink>
        </div>
      </div>
      {/* Image */}
      <div className="md:w-1/2 px-6">
        <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-1280x720.jpg" alt="Contact" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default About;
