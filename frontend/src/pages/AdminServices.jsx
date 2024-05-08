import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../store/auth-context'

function AdminServices() {
  const {services , token} = useContext(authContext)
  const [service,setservice] = useState([])
  useEffect(() => {
    setservice(services.length === 0 ? [] : services)
  }, [])

  const handleDelete =(id)=>{
    try{
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      fetch(`http://localhost:3000/api/admin/service/delete/${id}`, requestOptions)
       .then((response) => response.json())
       .then((data) => {
          console.log(data)
          setservice(service.filter((service) => service._id!== id))
        })
       .catch((error) => console.log(error));

    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="overflow-x-auto">
    <table className="table-auto min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clients</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {service.map((service, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            <td className="px-6 py-4 whitespace-nowrap">{service.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{service.description}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <img src={service.image} alt={service.name} className="h-10 w-10" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{service.clients}</td>
            <td className="px-6 py-4 whitespace-nowrap">{service.price}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => handleDelete(service._id)} // Pass the product id to the handleDelete function
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
}

export default AdminServices