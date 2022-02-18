import React from 'react'
import "./homeDashBoard.css"
import {ArrowDownward} from '@mui/icons-material';

function HomeDashBoard() {
  return (
    <div className='homeDashBoardContainer'>
        
        <div className='revenueSalesContainer'>
          <div className='revenueSalesContainerItem'>
            Revenue
            <p> <b>$2,454 </b>
              <span className='indexValue'>-11.4</span> 
              <span className='arrow'>
                <ArrowDownward 
                    color="secondary"
                    fontSize='small'/>
              </span> <br/>
              {/* <span className='footerNote'>Compared to last Month</span> */}
              
            </p>
            Compared to last Month

           </div>{/*End of revenueSalesContainerItem */}

           <div className='revenueSalesContainerItem'>
            Sales
            <p> <b>$2,454 </b>
              <span className='indexValue'>-11.4</span> 
              <span className='arrow'>
                <ArrowDownward 
                    color="secondary"
                    fontSize='small'/>
              </span> <br/>
              {/* <span className='footerNote'>Compared to last Month</span> */}
              
            </p>
            Compared to last Month

           </div>{/*End of revenueSalesContainerItem */}

           <div className='revenueSalesContainerItem'>
            Cost
            <p> <b>$2,454 </b>
              <span className='indexValue'>-11.4</span> 
              <span className='arrow'>
                <ArrowDownward 
                    color="secondary"
                    fontSize='small'/>
              </span> <br/>
              {/* <span className='footerNote'>Compared to last Month</span> */}
              
            </p>
            Compared to last Month

           </div>{/*End of revenueSalesContainerItem */}
         
        </div>
        
    </div>
  )
}

export default HomeDashBoard