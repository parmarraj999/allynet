import React from 'react'
import Navbar from '../navbar/navbar'
import Sidenav from '../sidenav/sidebar'
import './main.css'

function Main() {
  return (
    <div className='layout-container'>
      <Navbar />
      <div className='layout-wrapper' >
        <Sidenav/>
        <div className='main-container'>
          main content
        </div>
      </div>
    </div>
  )
}

export default Main