import React from 'react';

const Home = () => {
  return (
    <div className='mx-10'>
      {/* First Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Content */}
          <div className="w-1/2 pr-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Business Consulting</h1>
            <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit turpis ut magna efficitur, nec cursus lorem rhoncus. Vivamus vitae velit quis turpis suscipit luctus ut nec est.</p>
            <div>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4">Learn More</button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg">Contact Us</button>
            </div>
          </div>
          {/* Right Image */}
          <div className="w-1/2">
            <img src="https://www.cgi.com/sites/default/files/styles/hero_banner/public/hero_-_consultants_talking_together.jpg.webp?itok=xohyfb2h" alt="Consulting" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Features</h2>
          <div className="flex flex-wrap justify-center">
            {/* Feature Cards */}
            <div className="w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Feature 1</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Feature 2</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Feature 3</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Feature 4</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit turpis ut magna efficitur, nec cursus lorem rhoncus. Vivamus vitae velit quis turpis suscipit luctus ut nec est.</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-8">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
