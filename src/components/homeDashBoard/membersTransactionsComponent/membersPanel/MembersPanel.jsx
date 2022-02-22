import React from 'react'
import './MembersPanel.css'
import {Visibility} from '@mui/icons-material'

function MembersTransactions() {
  return (
    <div className='membersContainer'>
       
        <div className='newMembers'>
            <span className='newMembersTitle'>
                New Join Members
            </span>
            <ul>
                <li>
                    <img className='imageWidget' src="/images/efe1.jpg"/>
                    <div className='memberName'>
                        <span className='memberUsername'>Anna Keller</span>
                        <span className='memberPosition'>Software Engineer</span>
                    </div>
                    <button className='memberButton'>
                        <Visibility/>
                        Display
                    </button>
                </li>
                <li>
                    <img className='imageWidget' src="/images/efe1.jpg"/>
                    <div className='memberName'>
                        <span className='memberUsername'>Anna Keller</span>
                        <span className='memberPosition'>Software Engineer</span>
                    </div>
                    <button className='memberButton'>
                        <Visibility/>
                        Display
                    </button>
                </li>

                
            </ul>                    
        </div>

        
    </div>
  )
}

export default MembersTransactions