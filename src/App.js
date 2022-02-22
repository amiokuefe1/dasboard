import React from "react";
import Topbar from "./components/topbar/Topbar";
import MainSideBar from "./components/mainSideBar/MainSideBar";
// import HomeDashBoard from "./components/homeDashBoard/HomeDashBoard";
import HomeDashBoard from "./pages/homeDashBoard/HomeDashBoard"
import "./App.css"

import newProduct from './pages/newProduct/NewProduct'
import newUser from './pages/newUser/NewUser'
import product from './pages/product/Product'
import productList from './pages/productList/ProductList'
import user from './pages/user/User'
import usersList from './pages/usersList/UsersList'


function App() {
  return (
    <div>
      <Topbar />
      
      <div className="container">
        <MainSideBar />
        
        <div className="right">
          <HomeDashBoard />
        </div>
        
      </div>
      
      
       
    </div>
  );
}

export default App;