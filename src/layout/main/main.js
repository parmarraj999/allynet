import React from 'react'
import Navbar from '../navbar/navbar'
import Sidenav from '../sidenav/sidenav'

function Main() {
  return (
    <div className='layout-container'>
      <Navbar />
      <div className='layout-wrapper' >
        <Sidenav/>
        <div>
          main content
        </div>
      </div>
    </div>
  )
}

export default Main