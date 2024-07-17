import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/1-removebg-preview (1).png'
// import navprofile from '../../assets/icon3.png'

const Navbar = () => {
    return(
      
      <div className='navbar'>
         <img src={navlogo} alt='' className='nav-logo' />
         <h2><span>GALAXY  </span>STORE</h2>
         {/* <img src={navprofile} alt='' className='nav-profile' /> */}
      </div>
    )
}

export default Navbar



