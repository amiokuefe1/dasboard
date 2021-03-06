import { Button } from '@mui/material';
import React from 'react';
import "./transactionPanel.css"



function TransactionPanel() {
    const Button = ({ type }) =>{
        return <button className={'buttonDesign ' +  type}>{type}</button>;
        
    }; // This variable is a local variable that can
    // be accessed from inside this component
    // also the Button is receiving a type paramenter
    // reminds me of method overriding in OOP?

  return (
    <div className='transactionsContainer'>
        {/* TransactionPanel */}
        <span className='transactionTitle'>Latest Transactions</span>
        
        <table className='transactionTable'>
                <tr>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td className='transactionUser'>
                        <img className='transactionImg' src="/images/efe1.jpg"/>
                        <span>Susan Carlson</span>
                    </td>
                    <td className='transactionDate'>
                        23 May 2021
                    </td>
                    <td className='transactionAmount'>
                        $122.00
                    </td>
                    <td>
                        <Button type="Approved" />
                    </td>

                </tr>
            </table>
    </div>
  )
}

export default TransactionPanel