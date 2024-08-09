import React from 'react'

import { decrement, increment } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'


export default function Counter() {
    let count = useSelector((state) => state.counter.value);
    let dispatch = useDispatch();
  return (
    <div>
        <h3>Counter Project</h3>
        <span>{count}</span><br/>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

