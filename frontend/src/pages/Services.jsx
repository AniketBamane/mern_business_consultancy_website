import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../store/auth-context';



const Services = () => {
  // const [services,setServices] = useState([])
  const {services} = useContext(authContext)

  return (
    <div className="container px-16 py-8">
      <h1 className="text-3xl font-semibold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {services.map(service => (
          <div key={service.name} className="bg-white rounded-lg  shadow-lg p-6">
            <img src={service.image} alt={service.name} className="w-full mb-4" />
            <h2 className="text-lg font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-gray-600 mb-4">{service.clients} clients</p>
            <p className="text-gray-600 mb-4">{service.price} Rupees</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
