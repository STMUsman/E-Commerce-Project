
import React, { useState } from 'react'
import './Orderdetails.css'

const Orderdetails = () => {

    const [orderDetails,setOrderDetails] = useState({
        fname:"",
        lname:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:""

    });
  
    const changeHandler = (e) => {
        setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
      };
  
    const Order_Details = async () => {
    console.log(orderDetails);
    let responseData;

    await fetch('http://localhost:4000/productorder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(orderDetails),
    }).then((resp) => resp.json())
      .then((data) => { responseData = data; });

    if (responseData.success) {
      alert("Order submitted successfully!");
    } else {
      alert("Order submission failed.");
    }
  };
    
  return (
    
    <div className='add-product'>
      <p>Delivery Details</p>
      <div className="add-product-name">
      <div className="addproduct-itemfield">
          <input value={orderDetails.fname} onChange={changeHandler} type='text' name='fname' placeholder='First name' />
      </div>
      <div className="addproduct-itemfield">
        <input value={orderDetails.lname} onChange={changeHandler} type='text' name='lname' placeholder='Last name' />
      </div>
      </div>

      <div className="addproduct-itemfield">
        <input value={orderDetails.email} onChange={changeHandler} type='text' name='email' placeholder='Email address' />
      </div>
      <div className="addproduct-itemfield">
        <input value={orderDetails.street} onChange={changeHandler} type='text' name='street' placeholder='Street' />
      </div>

      <div className="address">
      <div className="addproduct-itemfield">
        <input value={orderDetails.city} onChange={changeHandler} type='text' name='city' placeholder='City' />
      </div>
      <div className="addproduct-itemfield">
        <input value={orderDetails.state} onChange={changeHandler} type='text' name='state' placeholder='State' />
      </div>
      </div>

      <div className="address-zipcode">
      <div className="addproduct-itemfield">
        <input  value={orderDetails.zipcode} onChange={changeHandler} type='text' name='zipcode' placeholder='Zip code' />
      </div>
      <div className="addproduct-itemfield">
        <input  value={orderDetails.country} onChange={changeHandler} type='text' name='country' placeholder='Country' />
      </div>
      </div>
      <div className="addproduct-itemfield">
        <input value={orderDetails.phone} onChange={changeHandler} type='text' name='phone' placeholder='Phone' />
      </div>
      <div className="addproduct-btn">
        <button onClick={()=>{Order_Details()}} className='confirm-btn' > Confirm </button>
      </div>
    
  
   
</div>
  )
}

export default Orderdetails
