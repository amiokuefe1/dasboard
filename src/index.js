import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import NewProduct from './pages/newProduct/NewProduct'
import NewUser from './pages/newUser/NewUser'
import Product from './pages/product/Product'
import productList from './pages/productList/ProductList'
import User from './pages/user/User'
import usersList from './pages/usersList/UsersList'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='newproduct' element={<NewProduct />} />
        <Route path='newuser' element={<NewUser />} />
        <Route path='product' element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
