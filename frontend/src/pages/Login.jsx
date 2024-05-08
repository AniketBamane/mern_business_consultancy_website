import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../store/auth-context';
import { toast } from 'react-toastify';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const {login} = useContext(authContext)
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleOnSubmit = async(e) => {
    e.preventDefault();
    // console.log(credentials);
try{    const response = await fetch("http://localhost:3000/api/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
    const data = await response.json()
    if(response.ok == true){
      setCredentials({email:"",password:"",})
      login(data.token)
      navigate("/")
      toast.success("Login Successful !")
    }else{
      toast.error(data.extraDetails ? data.extraDetails : "invalid credentials",{
        progressStyle:{
          backgroundColor:"white",
        },
        style:{
          backgroundColor:"red",
          color:"white",
        },
        className: 'custom-toast-error',
      })
    }
  }catch(error){
    console.log(error.message)
  }
  };

  return (
    <div className="flex justify-center items-center h-1/2 my-20 bg-gray-100 mx-16 gap-5">
      {/* Image */}
      <div className="hidden md:block w-1/3">
        <img
          src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714694400&semt=sph"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login Form */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleOnChange}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
