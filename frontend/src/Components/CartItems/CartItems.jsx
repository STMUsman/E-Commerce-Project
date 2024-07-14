import React, { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/trash-bin_12371679.png'

const CartItems = (items) => {
    
      const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
      
    return(
     <div className="cartitems">
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Brand</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {all_product.map((e) => {
            if(cartItems[e.id] > 0){
                 return (   
                  <div key={e.id}>
                    <div className='cartitems-format cartitems-format-main'>
                       <img src={e.image} alt="" className='carticon-product-icon'/>
                       <p>{e.name}</p>
                       <p>{e.brand}</p>
                       <p>LKR {e.new_price}</p>
                       
                       <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                       <p>LKR {e.new_price*cartItems[e.id]}</p>
                      <div className='remove-icon'><img src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt=""/></div> 
                    </div>
                 <hr />
               </div>
                 );
              }
              return null;
          })}
            

                  <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                  </div>

                  <div className='cartitems-down'>
                    <div className='cartitems-total-item'>
                        <p>Subtotal</p>
                        <p>LKR {getTotalCartAmount()}</p> 
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>LKR {getTotalCartAmount()}</h3>
                    </div>
                  </div>
                
          </div>
          
    );
};

export default CartItems;