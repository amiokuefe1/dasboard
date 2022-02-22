import React from 'react'
import './activeUserDetails.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{name: 'Jan', uv: 400, pv: 2400, amt: 2400}, 
                {name: 'Feb', uv: 300, pv: 2400, amt: 2400}, 
                {name: 'March', uv: 300, pv: 2400, amt: 2400},
                {name: 'April', uv: 200, pv: 2400, amt: 2400},
                {name: 'May', uv: 270, pv: 2400, amt: 2400},
                {name: 'June', uv: 190, pv: 2400, amt: 2400}];
const renderLineChart = (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip/>
      
    </LineChart>
  );

function ActiveUserDetails() {
  return (
    <div className='activeUserDetailsContainer'>
        <span>Active User Details</span>

        <div className='spreadOut'>
            {renderLineChart}
        </div>
        

    </div>
  )
}

export default ActiveUserDetails

