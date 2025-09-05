import React from 'react'
import Navbar from '../navbar/navbar'
import Sidenav from '../sidenav/sidebar'
import './main.css'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div className='layout-container'>
      <Navbar />
      <div className='layout-wrapper' >
        <Sidenav/>
        <div className='main-container'>
         <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Main