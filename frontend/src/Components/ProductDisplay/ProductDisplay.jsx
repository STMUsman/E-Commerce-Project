import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_dull_icon from "../Assets/star_7656139.png";
import star_icon from "../Assets/star_12184384 (1).png";
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);

  // const ProductDisplay = () => {
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name} (Company Warranty)</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">LKR {product.old_price}</div>
            <div className="productdisplay-right-price-new">LKR {product.new_price}</div>
       </div>

       <div className="important-things">
        <h2>Delivery</h2>
           <p>Cash on Delivery Available</p>
        <h2>Service</h2>
           <p>1 Year Warranty</p>
      </div>
      <div className='Description'>
        <p>Direct Import/Brand New/Sealed Pack/Original/TRCSL Approved</p>
      </div>

      
      <div className='brandname-productcode'>
          <p><b>Brand :</b> {product.brand}</p>
          <p><b>Product Code :</b> {product.name}</p>
      </div>

      <div className="productdisplay-right-description">
      Download the perfect image pictures. Find over 100+ of the best free image images. Free 
      for commercial use ✓ No attribution required ✓ Copyright-free.
      </div> 
         
      </div>
      <div className="delivery-information">
        <h3>Choice Delivery</h3>
        <p>Free shipping</p>
        <p><span>Delivery: </span> within 14 days</p>
        <hr />
        <h3>Choice Service</h3>
        <p>Buyer protection</p>
        <hr />
        <h3>Quantity</h3>
        <p>Max. 5 pcs/shopper</p>
        <div className='orderconfirmation'>
            <Link to={'/orderconfirm'} style={{textDecoration:"none"}}>
                    <p>Buy now</p>
             </Link>
             </div>
        <div className='addtocart'><button onClick={()=>{addToCart(product.id)}}>Add to Cart</button></div>
            
      </div>
    </div>
  )
}

export default ProductDisplay;
