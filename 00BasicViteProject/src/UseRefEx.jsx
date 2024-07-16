import React, { useEffect, useRef, useState } from 'react'

const UseRefEx = () => {
    let [inputValue,setInputValue] = useState("");
    let count = useRef(0);
    useEffect(()=>{
        count.current = count.current + 1 ;
    });
  return (
    <>
         <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  )
}

const UseRefEx2 = () => {
    const inputElement = useRef();

    const focusInput = () => {
      inputElement.current.focus();
      alert(inputElement.current.value);
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
}

export default UseRefEx2