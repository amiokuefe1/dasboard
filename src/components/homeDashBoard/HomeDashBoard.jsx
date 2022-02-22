import React from 'react'
import "./homeDashBoard.css"

import ActiveUserDetails from './activeUserDetails/ActiveUserDetails';

import RevenueSalesCost from './revenueSalesCost/RevenueSalesCost';

import MembersPanel from './membersTransactionsComponent/membersPanel/MembersPanel';

import TransactionPanel from './membersTransactionsComponent/transactionPanel/TransactionPanel';


function HomeDashBoard() {
  return (
    <div className='homeDashBoardContainer'>
      <RevenueSalesCost />
      <ActiveUserDetails/>

      <div className="userTransact">
            <MembersPanel/>
            <TransactionPanel />
      </div>
        
    </div>
  )
}

export default HomeDashBoard