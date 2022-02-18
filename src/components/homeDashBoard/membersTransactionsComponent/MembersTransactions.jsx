import React from 'react'
import './membersTransactions.css'
import {Visibility} from '@mui/icons-material'

function MembersTransactions() {
  return (
    <div className='membersTransactionsContainer'>
       
        <div className='newMembers'>
            <span>
                New Join Members
            </span>
            <ul>
                <li>
                    <img className='imageWidget' src="/images/efe1.jpg"/>
                    <div className='memberName'>
                        <span>Anna Keller</span>
                        <span>Software Engineer</span>
                    </div>
                    <button className='memberButton'>
                        <Visibility/>
                        Display
                    </button>
                </li>

                <li>
                    <img className='imageWidget' src="/images/efe1.jpg"/>
                    <div className='memberName'>
                        <span>Anna Keller</span>
                        <span>Software Engineer</span>
                    </div>
                    <button className='memberButton'>
                        <Visibility/>
                        Display
                    </button>
                </li>
            </ul>                    
        </div>

        <div className='transactions'>
            David
        </div>
    </div>
  )
}

export default MembersTransactions