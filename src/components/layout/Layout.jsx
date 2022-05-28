import React from 'react'
import Topbar from '../topbar/Topbar'
import MainSideBar from '../mainSideBar/MainSideBar'

import { BrowserRouter as Switch, Router, Routes, Route, Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{position: "relative"}}>
        <Topbar/>
        <MainSideBar/>
        {/* <Link to="/"></Link> */}
        <div style={{position:"absolute", right:250, top:300}}>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout