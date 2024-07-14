
import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/letter-g_11150369.png'
import cart_icon from '../Assets/icons8-cart-64.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  
    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);

    return (
      <div className="container">
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>GALAXY STORE</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'><p>Home</p></Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mobile phones")}}><Link style={{textDecoration: 'none'}} to='/mobile_phones'><p>Mobile Phones</p></Link>{menu==="mobilephones"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("phone accessories")}}><Link style={{textDecoration: 'none'}} to='/phone_accessories'><p>Phone Accessories</p></Link>{menu==="phoneaccessories"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("phone parts")}}><Link style={{textDecoration: 'none'}} to='/phone_parts'><p>Phones Parts</p></Link>{menu==="phoneparts"?<hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart"> 
                  {localStorage.getItem('auth-token')
                  ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                  :<Link to='/login'><button>Login</button></Link>}
                    <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                   <div className="nav-cart-count">{getTotalCartItems}</div>
                </div>
      
    </div>
    </div>
  );
}

export default Navbar
