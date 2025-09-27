import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <ToastContainer 
    position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  className="text-sm" // Add Tailwind class
  toastClassName={() => 
    "relative flex p-4 min-h-16 rounded-md justify-between overflow-hidden cursor-pointer my-2"
  }
    />
    </>
  )
}

export default MainLayout