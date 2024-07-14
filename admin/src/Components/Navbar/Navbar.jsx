import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/letter-g_11150369.png'
// import navprofile from '../../assets/icon3.png'

const Navbar = () => {
    return(
      
      <div className='navbar'>
         <img src={navlogo} alt='' className='nav-logo' />
         <h2>GALAXY STORE</h2>
         {/* <img src={navprofile} alt='' className='nav-profile' /> */}
      </div>
    )
}

export default Navbar



