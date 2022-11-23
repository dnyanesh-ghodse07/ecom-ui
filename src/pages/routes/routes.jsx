import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import Home from '.././Home';
import Product from '../Product';
import ProductList from '../ProductList';
import Login from '../Login';
import Register from '../Register';
import Cart from '../Cart';
const PageRoutes = () => {
    const user = false;
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path=':id/cart' element={<Cart/>} />
        <Route path='/login' element={user ? <Navigate replace to="/" /> : <Login/>} />
        <Route path='/register' element={user ? <Navigate replace to="/" /> : <Register/>} />
        <Route path='/products/:category' element={<ProductList/>} />
        <Route path='/product/:id' element={<Product/>} />
    </Routes>
    </>
  )
}

export default PageRoutes