import React, { useEffect, useState } from 'react';
import './Orderstable.css'
import cross_icon from '../../assets/wishlist_7032671.png';

const Orders = () => {

     const[allorder,setAllOrder] = useState([]);
     
     const fetchInfo = async ()=>{
        await fetch('http://localhost:4000/allorders')
        .then((res)=>res.json())
        .then((data)=>{setAllOrder(data)});
     }

    useEffect(()=>{
        fetchInfo();
    },[])

    return (
        <div className='Orders'>
            <h1>Order details</h1>
            <div className="Order-format-main">
                <h3>Full Name</h3>
                <h3>E-mail</h3>
                <h3>Street</h3>
                <h3>City</h3>
                <h3>State</h3>
                <h3>Zipcode</h3>
                {/* <p>Price</p> */}
                <h3>Phone</h3>
                <h3>Date</h3>
            </div>
            <div className="listorders-allorders">
            <hr />
            {allorder.map((product,index) => (
              <div key={product.id} className='hr'>
                <div key={index} className="Order-format-main Order-format">
                {/* <img src={product.image} alt="" className="Orders-product-icon" />    */}
                    {/* <p>{product.name}</p> */}
                    <p>{product.fname}{product.lname}</p>
                    <p>{product.email}</p>
                    <p>{product.street}</p>
                    <p>{product.city}</p>
                    <p>{product.state}</p>
                    <p>{product.zipcode}</p>
                    <p>{product.phone}</p>
                    <p>{new Date(product.date).toLocaleDateString()}</p>
                    {/* <p>{product.new_price}</p> */}
                </div>
                 <hr />
             </div>
            ))} 
          </div>
            
        </div>
    )
}

export default Orders;


