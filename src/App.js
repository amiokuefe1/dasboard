import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Switch, Router, Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import MainSideBar from "./components/mainSideBar/MainSideBar";

import HomeDashBoard from "./pages/homeDashBoard/HomeDashBoard"

import Invoice from "./pages/invoicesDir/Invoice";
import Invoices from "./pages/invoicesDir/Invoices";

import "./App.css"


import NewProduct from './pages/newProduct/NewProduct'
import NewUser from './pages/newUser/NewUser'
import Product from './pages/product/Product'
import ProductList from './pages/productList/ProductList'
import User from './pages/user/User'
import UserList from './pages/usersList/UsersList'
import Layout from "./components/layout/Layout";


function App() {
  return (
    <>
       <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='newproduct' element={<NewProduct/>} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>

          {/* <Route path='product' element={<Product />} /> */}
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes> 
       
    </>

 

  );
}

export default App;