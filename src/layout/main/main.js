import React, { useState } from 'react'
import Navbar from '../navbar/navbar'
import Sidenav from '../sidenav/sidebar'
import './main.css'
import { Outlet } from 'react-router-dom'
import { LayoutContextProvider } from './layoutContext'

function Main() {

  return (
    <LayoutContextProvider>
      <div className='layout-container'>
        <Navbar />
        <div className='layout-wrapper' >
          <Sidenav />
          <div className='main-container'>
            <Outlet />
          </div>
        </div>
      </div>
    </LayoutContextProvider>
  )
}

export default Main