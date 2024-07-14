import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_product_icon from '../../assets/package_9493631.png'
import list_product_icon from '../../assets/list-items_10464756.png'
import order_product_icon from '../../assets/wishlist_7032671 (1).png'

const Sidebar = () => {
    return(
        <div className='sidebar'>
             <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-Add-Product">
                    <img src={add_product_icon} alt='' />
                    <p>Add Product</p>
                </div>
             </Link>
             <Link to={'/listproduct'} style={{textDecoration:"none"}}>
                <div className="sidebar-Product-List">
                    <img src={list_product_icon} alt='' />
                    <p>Product List</p>
                </div>
             </Link>
             <Link to={'/orderdetails'} style={{textDecoration:"none"}}>
                <div className="sidebar-Order-Details">
                    <img src={order_product_icon} alt='' />
                    <p>Order Details</p>
                </div>
             </Link>

        </div>
    )
}

export default Sidebar