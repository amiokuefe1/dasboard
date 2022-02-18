import React from 'react'
import "./Topbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';


export default function topbar() {
  return (
    <div className='topbar'>
      <div className='topbarwrapper'>
        <div className='topLeft'>
          <span className='logo'>Data Analytics</span>
        </div>
        <div className='topRight'>
            <div className='topbarIconContainer'>
              <NotificationsNone/> 
              <span className='topIconBadge'>2</span>
            </div>
            <div className='topbarIconContainer'>
              
              <span className='topIconBadge'>2</span>
              <Language/>
             
            </div>        
            <div className='topbarIconContainer'>
              
              {/* <span className='topIconBadge'>2</span> */}
              <Settings/>  
            </div>
            <div className='topbarIconContainer'>
              <div className='topImgContainer'>
              <img className='topImg' src="/images/efe1.jpg" alt="" />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
