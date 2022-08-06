import React from 'react'
import { useState } from 'react';

const Counter = (props) => {
    const [value,setvalue]=useState(0)
    
  return (
    <div>
        <center><h1>{props.title}</h1></center>
      <div className='anil' >
        <button type="button" class="btn btn-primary" onClick={()=>setvalue(value+1)}>incr</button>
        <h5>{value}</h5>
        <button type="button" class="btn btn-primary" onClick={()=>(value>0?setvalue(value-1):setvalue(0))}>decr</button>
      </div>
    </div>
  )
}

export default Counter;