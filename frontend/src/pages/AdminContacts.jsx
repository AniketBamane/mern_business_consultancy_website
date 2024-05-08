import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../store/auth-context'

function AdminContacts() {
  const {contacts , token} = useContext(authContext)
  const [contact,setContact] = useState([])
  useEffect(() => {
    setContact(contacts.length === 0 ? [] : contacts)
  }, [])

  const handleDelete = (id)=>{
    console.log(token)
  try{  fetch(`http://localhost:3000/api/admin/contact/delete/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        "authorization":`Bearer ${token}`,
      }
    })
   .then(res=>res.json())
   .then(res=>{
      setContact(contact.filter(contact=>contact._id!== id))
      console.log("contact deleted successfully")
    })}catch(error){
    console.log(error)
    }
  }
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contact.map((contact, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-6 py-4 whitespace-nowrap">{contact.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.message}</td>
              <td className="px-6 py-4 whitespace-nowrap"><button
                  onClick={() => handleDelete(contact._id)} // Pass the contact id to the handleDelete function
                  className="text-red-600 hover:text-red-900"
                >
                  Delete
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminContacts