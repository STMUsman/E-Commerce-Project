import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/letter-g_11150369.png'
import instagram_icon from '../Assets/instagram_3955024.png'
import printerst_icon from '../Assets/pinterest_145808.png'
import whatsapp_icon from '../Assets/whatsapp_3670051 (1).png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=''/>
            <p>GALAXY STORE</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={printerst_icon} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className="footer-copyright">
           <hr />
           <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  );
}

export default Footer
