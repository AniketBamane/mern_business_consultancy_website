import React from 'react'
import { NavLink } from 'react-router-dom';

function AdminSidebar() {
  return (

    <div className=" flex flex-col justify-between items-center bg-gray-900 text-white w-1/6 h-screen p-6">
      <div className="flex flex-col space-y-4">
        <NavLink to="/admin/users"  className="text-xl">Users</NavLink>
        <NavLink to="/admin/contacts"  className="text-xl">Contacts</NavLink>
        <NavLink to="/admin/services"  className="text-xl">Services</NavLink>
      </div>
      <div className="mt-auto">Footer or Additional Content</div>
    </div>
  );
}

export default AdminSidebar