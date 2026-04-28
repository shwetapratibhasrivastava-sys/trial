import React from 'react'
import { Outlet } from 'react-router-dom'
import Footerpage from '../Footer/Footerpage'
import Navbar from '../../components/Header/Navbar';
import TopNavbar from '../../components/Header/TopNavbar';


const MainLayout = () => {
  return (
    <>
    <TopNavbar/>
    <Navbar/>
    <main>
     <Outlet/>
    </main>
    <Footerpage/>
    </>
  )
}

export default MainLayout