import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Items/Item'
import { useNavigate } from 'react-router-dom';


  function Popular() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/latestcollection');
    };




 const [popularProducts,setPopularProducts] = useState([]);

 useEffect(()=>{
   fetch('http://localhost:4000/Latestdevices')
   .then((response)=>response.json())
   .then((data)=>setPopularProducts(data));
 },[])

  return (
    <div className='popular'>
        <h1>Latest Devices</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} brand={item.brand}/>
            })}
        </div>
      
    </div>
  )
}

export default Popular
