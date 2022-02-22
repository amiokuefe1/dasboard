import React from "react";
import Topbar from "./components/topbar/Topbar";
import MainSideBar from "./components/mainSideBar/MainSideBar";
import HomeDashBoard from "./components/homeDashBoard/HomeDashBoard";
import "./App.css"


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