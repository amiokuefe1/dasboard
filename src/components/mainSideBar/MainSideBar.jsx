import React from "react";
import './MainSideBar.css';
import {Home, Timeline, TrendingUp} from '@mui/icons-material';
import { BrowserRouter as Switch, Router, Routes, Route, Link } from "react-router-dom";

function MainSideBar() {
  return (
    <div className="sideBarContainer">
        
        <div className="navItemContainer">
            Dashboard
            <ul>
                <li> <span><Home/></span>Home</li>
                <li><span><Timeline/></span>Analytics</li>
                <li><span><TrendingUp/></span><Link to={'/home/newproduct'}>Sales</Link></li>
            </ul>
        </div>

        <div className="navItemContainer">
            Quick Menu
            <ul>
                <li> <span><Home/></span>User</li>
                <li><span><Timeline/></span>Products</li>
                <li><span><TrendingUp/></span>Transactions</li>
                <li><span><TrendingUp/></span>Reports</li>
            </ul>
        </div>

        <div className="navItemContainer">
            Notifications
            <ul>
                <li> <span><Home/></span>Mail</li>
                <li><span><Timeline/></span>Feedback</li>
                <li><span><TrendingUp/></span>Message</li>
            </ul>
        </div>
        <div className="navItemContainer">
            Staff
            <ul>
                <li> <span><Home/></span>Manage</li>
                <li><span><Timeline/></span>Analytics</li>
                <li><span><TrendingUp/></span>Reports</li>
            </ul>
        </div>

    </div>
  )
}

export default MainSideBar