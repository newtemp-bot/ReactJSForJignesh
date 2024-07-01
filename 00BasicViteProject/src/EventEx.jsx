import React, { useState } from 'react'

const EventEx = () => {
    let [count,setCount] = useState(0)
    let jadu = (a) => {
        console.log("Hello",a)
    }
    let kem = (val) => {
        setCount(val.target.value)
    }
  return (
    <>
    <label>{count}</label>
    <button onClick={()=>setCount(5)}>Add</button>   
    <button onClick={()=>jadu(10)}>Call Jadu</button> 
    <input type='text' onChange={(event)=>kem(event)}/> 
    </>
  )
}

export default EventEx