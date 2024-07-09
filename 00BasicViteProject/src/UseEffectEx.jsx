import React,{useEffect, useState} from 'react'

const UseEffectEx = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        let t = setTimeout(()=>{
            setCount(count=>count+1);
        },1000);
        return ()=>clearTimeout(t);
    },[]);
  return (
    <div><h1>I've rendered {count} times!</h1></div>
  )
}

export default UseEffectEx