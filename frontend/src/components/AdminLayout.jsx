import React, { useContext, useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { authContext } from '../store/auth-context'

function AdminLayout() {
  const navigate = useNavigate()
  const {user ,loading} = useContext(authContext)


      
      if(user.isAdmin == true) {
        return (
          <div className='flex gap-10 '>
            <AdminSidebar />
            <Outlet />
          </div>
        )
      }else{
        return  <center>
          <h1>you are not admin !!</h1>
         </center>
      }
}

export default AdminLayout