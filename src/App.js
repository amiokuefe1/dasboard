import React from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Switch, Router, Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import MainSideBar from "./components/mainSideBar/MainSideBar";

import HomeDashBoard from "./pages/homeDashBoard/HomeDashBoard"
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
    <div>
      <Layout />
      {/* <Topbar />
      
      <div className="container">
        <MainSideBar />
        <HomeDashBoard />
      </div> */}
      
      {/* <h1>Bookkeeper</h1> */}
      {/* <Topbar /> */}
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav> */}
      
       
    </div>

    // <BrowserRouter>
    //   <Topbar />
    //   {/* <div className="container"> */}
    //   <Routes>
    //     <Route path="/" element={<MainSideBar />}>
          
    //       {/* <div className="right"> */}
    //         <Route index element={<HomeDashBoard />} />
    //         <Route path="newUser" element={<newUser />} />
    //         <Route path="newProduct" element={<newProduct />} />
    //         <Route path="product" element={<Product />} />
    //         <Route path="user" element={<User />} />
    //         <Route path="usersList" element={<usersList />} />
    //       {/* </div> */}
          
    //     </Route>
    //   </Routes>
    //   {/* </div> */}
    // </BrowserRouter>

  );
}

export default App;