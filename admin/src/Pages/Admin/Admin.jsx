import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../../Components/Addproduct/Addproduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import Ordersdetails from '../../Components/Orderstable/Orderstable'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addproduct />}/>
        <Route path='/listproduct' element={<ListProduct />}/>
        <Route path='/orderdetails' element={<Ordersdetails />}/>
      </Routes>
    </div>
  )
}

export default Admin
