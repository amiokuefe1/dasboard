import React from 'react'
import "./homeDashBoard.css"


import ActiveUserDetails from '../../components/homeDashBoardComponents/activeUserDetails/ActiveUserDetails'

import RevenueSalesCost from '../../components/homeDashBoardComponents/revenueSalesCost/RevenueSalesCost';

import MembersPanel from '../../components/homeDashBoardComponents/membersTransactionsComponent/membersPanel/MembersPanel';

import TransactionPanel from '../../components/homeDashBoardComponents/membersTransactionsComponent/transactionPanel/TransactionPanel';


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