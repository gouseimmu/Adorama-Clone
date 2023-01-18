import React from 'react'
import {Routes,Route} from "react-router-dom"
import AllProducts from '../pages/AllProducts'
import Cart from '../pages/Cart'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Payment from '../pages/Payment'
import Signup from '../pages/Signup'
import SingleProduct from '../pages/SingleProduct'
import AdminDashboard from './AdminDashboard'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
           
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/allproducts' element={<AllProducts/>}/>
            <Route path='/singleproduct' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path="/admin" element={<AdminDashboard/>} />

          

        </Routes>
    </div>
  )
}

export default MainRoutes