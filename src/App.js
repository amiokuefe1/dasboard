import React from "react";
import Topbar from "./components/topbar/Topbar";
import MainSideBar from "./components/mainSideBar/MainSideBar";
import HomeDashBoard from "./components/homeDashBoard/HomeDashBoard";
import "./App.css"
import ActiveUserDetails from "./components/homeDashBoard/activeUserDetails/ActiveUserDetails";
import MembersPanel from "./components/homeDashBoard/membersTransactionsComponent/membersPanel/MembersPanel";
import TransactionPanel from "./components/homeDashBoard/membersTransactionsComponent/transactionPanel/TransactionPanel";

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
          <ActiveUserDetails/>
          <div className="userTransact">
            <MembersPanel/>
            <TransactionPanel />
          </div>
          
          
        </div>
        
      </div>
      
      
       
    </div>
  );
}

export default App;