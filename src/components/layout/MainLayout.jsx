import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

const MainLayout = () => {
  return (
    <div className="bg-primaryBg text-white min-h-screen font-sans">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout