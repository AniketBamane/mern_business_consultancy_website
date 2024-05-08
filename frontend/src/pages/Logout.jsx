import React, { useContext, useEffect } from 'react';
import { authContext } from '../store/auth-context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Logout() {
  const navigate = useNavigate();
  const { logout } = useContext(authContext);

  useEffect(() => {
    // Perform logout when component mounts
    logout();
    // Display toast message after logout
    toast.success("Logged out successfully !");
    // Navigate to the login page after logout
    navigate("/login");
  }, [logout, navigate]); // Ensure useEffect dependencies are properly set

  // Return null or a placeholder while the logout process is in progress
  return null;
}

export default Logout;
