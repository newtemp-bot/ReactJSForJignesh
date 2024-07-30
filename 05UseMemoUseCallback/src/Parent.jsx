import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [value,setValue] = useState("Hello");
    const [child,setChild] = useState("Child");
    const [count,setCount] = useState(0);
    const setC = useCallback(() => {
        setCount(pre=>pre+5);
    },[child]);
  return (
    <>
    {count}
    <button onClick={setC}>add</button>
    <Child c={child} setC={setC}/>
    {child}
    <button onClick={()=>setChild(child+" Nice")}>Change Child</button>
    <h1>{value}</h1>
    <button onClick={()=>setValue(value+" Nice")}>Change Value</button>
    </>
  )
}

export default Parent