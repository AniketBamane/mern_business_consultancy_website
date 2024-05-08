import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../store/auth-context';

const Contact = () => {

  const {user} = useContext(authContext)

  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email ||'',
    message: '',
  });
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
try{    const response = await fetch("http://localhost:3000/api/form/contact",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(formData)
    })
    if(response.ok == true){
      setFormData({
        name:"",
        email:"",
        message:"",
      })
      const data = await response.json()
      console.log(data)
    }
  }catch(error){
      console.log(error.message)
    }

  };

  return (
    <div className="pb-10">
    <div className="container flex justify-center items-center py-16">
      {/* Left Image */}
      <div className="w-1/3 pr-8">
        <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1714780800&semt=ais" alt="Contact" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Right Form */}
      <div className="w-1/3 pl-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required="true"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required="true"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="6"
              columns="6"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required="true"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg">Submit</button>
        </form>
      </div>  
    </div>
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d30183.56098829807!2d72.83973144999999!3d18.978030800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1714884688176!5m2!1sen!2sin" height={450}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
    </div>

  );
};

export default Contact;
