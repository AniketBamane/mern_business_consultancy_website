import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../store/auth-context';
import { toast } from 'react-toastify';

const Register = () => {
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    phone:"",
  })
   const {login} = useContext(authContext)

  const navigate = useNavigate()

  const handleOnChange = (e)=>{
    const name =  e.target.name;
    const value =  e.target.value;

    setUser((user)=>{
      return {
       ...user,
        [name]:value
      }
    } );

  }

  const handleOnSubmit = async(e)=>{
    e.preventDefault();
    // console.log(user);
    try{
      
  const response =  await fetch(`http://localhost:3000/api/auth/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    })
    const token = await response.json()
    if(response.ok == true){
      setUser({
        name:"",
        email:"",
        password:"",
        phone:"",
      })
      console.log(token)
      login(token.token)
      navigate("/")
      toast.success("Registration successful !")
    }else{
      // console.log(token)
      toast.error(token.extraDetails ? token.extraDetails : "invalid credentials",{
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
    // console.log(response)
  }catch(error){
      console.log(error)
   }

  }

  return (
    <div className="flex justify-center items-center h-1/2 my-20 bg-gray-100 mx-16 gap-5">
      {/* Image */}
      <div className="hidden md:block w-1/3">
        <img src="https://t3.ftcdn.net/jpg/04/45/30/00/360_F_445300032_8BOeLM2RyS8hFgjPgZ8OMPXUelRCySun.jpg" alt="Registration" className="w-full h-full object-cover" />
      </div>

      {/* Registration Form */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Registration</h2>
        <form onSubmit={handleOnSubmit} >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"  onChange={handleOnChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" onChange={handleOnChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" onChange={handleOnChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-600 mb-2">Phone</label>
            <input type="Number" id="phone" name="phone" placeholder="Enter your phone number" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" onChange={handleOnChange} />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
