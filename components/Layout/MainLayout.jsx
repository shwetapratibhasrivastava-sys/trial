import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import Footerpage from '../Footer/Footerpage'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <main>
     <Outlet/>
    </main>
    <Footerpage/>
    </>
  )
}

export default MainLayout