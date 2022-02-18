import React from "react";
import Topbar from "./components/topbar/Topbar";
import MainSideBar from "./components/mainSideBar/MainSideBar";
import HomeDashBoard from "./components/homeDashBoard/HomeDashBoard";
import "./app.css"

function App() {
  return (
    <div>
      <Topbar />
      
      <div className="container">
        {/* <div className="left">
          hello
        </div> */}
        <MainSideBar />
        
        <div className="right">
          <HomeDashBoard />
          
        </div>
        
      </div>
      
      
       
    </div>
  );
}

export default App;