import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Items/Item'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/keyboard-arrow-down-2.png'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext); 

  return (
    <div className='shop-category '>
      <div className='shop-banner'>
      <img src={props.banner} alt=""  />
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
         Sort by  <img src={dropdown_icon} alt="" />
          </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i) => {
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} brand={item.brand}/>;
          } else {
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
  
};

export default ShopCategory;

