import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Mobilephone_banner from './Components/Assets/BLACK Sunday (1).png';
import Phones_accessorie_banner from './Components/Assets/www.galaxystore.com.png';
import Phonespart_banner from './Components/Assets/Banner phone1.png';
import LatestCollection from './Components/NewCollections/NewCollections'
import Orderconfirm from './Components/Orderdetails/Orderdetails'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mobile_phones' element={<ShopCategory banner={Mobilephone_banner} category="Mobile Phones" />} />
        <Route path='/phone_accessories' element={<ShopCategory banner={Phones_accessorie_banner} category="Phone Accessories" />} />
        <Route path='/phone_parts' element={<ShopCategory banner={Phonespart_banner} category="Phones Parts" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/offerpage' element={<ShopCategory />} />
        <Route path='/latestcollection' element={<LatestCollection />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/orderconfirm' element={<Orderconfirm />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
