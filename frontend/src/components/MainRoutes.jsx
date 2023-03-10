import React from 'react'
import {Routes,Route} from "react-router-dom"
import AllProducts from '../pages/AllProducts'
import Cart from '../pages/Cart'
import ForgotPassword from '../pages/ForgotPassword'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Payment from '../pages/Payment'
import ProductPage from '../pages/ProductPage'
import Signup from '../pages/Signup'
import SingleProduct from '../pages/SingleProduct'
import AdminDashboard from './AdminDashboard'
import EditProduct from './EditProduct'
import Product from "./product/Product"
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
           
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgot' element={<ForgotPassword/>}/>
            <Route path='/allproducts' element={<AllProducts/>}/>
            <Route path='/singleproduct' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path="/admin" element={<AdminDashboard/>} />

           <Route path='/product' element={<Product/>}/>


            <Route path="/admin/edit/:id" element={<EditProduct/>} />
 
             <Route path='/products' element={<ProductPage/>} />
          

        </Routes>
    </div>
  )
}

export default MainRoutes