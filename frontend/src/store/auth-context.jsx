import {  createContext, useEffect, useState } from "react";


export const authContext =  createContext({
  login: (token) => {
  },
  logout: () => {
  },
  token:null,
  isAuthenticated:false,
  user:{
    name:"",
    isAdmin:false,
    email:"",
    phone:""
  },
  services:[],
  users:[],
  contacts:[],
  loading:true,
})

export const  AuthContextProvider = ({children})=>{
  const [loading,setLoading] = useState(true)
  const [contacts,setContacts] = useState([])
  const [users,setUsers] = useState([])
 const [services,setServices] = useState([])
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [token ,setToken] = useState(null)
  const [user,setUser] = useState({
    name:"",
    isAdmin:false,
    email:"",
    phone:""
  })


  useEffect(()=>{
    const token = localStorage.getItem("auth-token");
    if(token){
      setIsAuthenticated(true)
      setToken(token)
    }else{
      setIsAuthenticated(false)
      setToken(null)
    }

     getUserData(token)
     getServiceData()
     getAdminUsers(token)
     getContactData(token)
     setLoading(false)
  },[])
 
 const getServiceData = ()=>{
  fetch("http://localhost:3000/api/service/services",{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  })
 .then(res => res.json())
 .then(data =>{
  setServices(data.response)
 })
 }

 const getAdminUsers = async(token)=>{
  try{
    fetch('http://localhost:3000/api/admin/users',{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "authorization": token, 
      }
    })
   .then(res=>res.json())
   .then(res=>{
    setUsers(res.users)
 
   })
  }catch(error){
    console.error(error.message)
  }
 }

 const getContactData = async(token)=>{
  try{
    fetch(`http://localhost:3000/api/admin/contacts`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "authorization":token
      }
    })
     .then(res=>res.json())
     .then(res=>{
        setContacts(res.contacts.length ===0 ? []:res.contacts)
      })
  }catch(error){
    console.error(error.message)
  }
 }

  const getUserData = async(token)=>{
  setLoading(true)
    try{    
      const response = await fetch("http://localhost:3000/api/auth/user",{
          method:"GET",
          headers:{
            "Content-Type":"application/json",
            "authorization":token
          }
        })
        if(response.ok == true){
          const data = await response.json()
          
          setUser({
            name:data.userData.name,
            isAdmin:data.userData.isAdmin,
            email:data.userData.email,
            phone:data.userData.phone
          })
          setLoading(false)
        }
      }catch(error){
        console.error(error.message)
      }
        
  }

  const login = (token) =>{
    localStorage.setItem("auth-token", token);
    setIsAuthenticated(true)
    setToken(token)
    getUserData(token)
  }
  const logout= () => {
    localStorage.removeItem("auth-token");
    setIsAuthenticated(false)
    setToken(null) 
    setUser({
      name:"",
      isAdmin:false,
      email:"",
      phone:""
    })
  }

  return( <authContext.Provider value={{login,logout,isAuthenticated,token,user,services,users,contacts}}>
    {children}
  </authContext.Provider>)
}