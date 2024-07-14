// import React from 'react'
// import './Offers.css'
// import exclusive_image from '../Assets/istockphoto.png'
// import { BrowserRouter as Routes,Route,Router} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Offerpage from '../../Pages/ShopCategory';


// function Offers() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/offerpage');

// };


  
//   return (
//     <Router>
//       <Routes>
//     <div className='offers'> 
//       <div className="offers-left">
//         <h1>Exclusive</h1>
//         <h1>Offers For You</h1>
//         <p>ONLY ON BEST SELLERS PRODUCTS</p>
//         <Route path='/offerpage' element={<Offerpage />}/>
//         <button onClick={handleClick}>Check Now</button>
//       </div>
//       <div className="offers-right">
//       <img src={exclusive_image} alt="" />
//       </div>
//     </div>
//     </Routes>
//     </Router>
//   )
// }

// export default Offers


import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/istockphoto.png';
import { useNavigate } from 'react-router-dom';

function Offers() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/offerpage');
  };

  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button onClick={handleClick}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
