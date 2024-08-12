import React from 'react'

import { decrement, increment, incrementByAmount } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react';


export default function Counter() {
    let count = useSelector((state) => state.counter.value);
    let numberValueRef = useRef();
    let dispatch = useDispatch();
    const incbynumber = () => {
      dispatch(incrementByAmount(Number(numberValueRef.current.value || 0)))
    }
  return (
    <div>
        <h3>Counter Project</h3>
        <span>{count}</span><br/>
        <input type="number" ref={numberValueRef}/>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={incbynumber}>Inc By Number</button>
    </div>
  )
}

