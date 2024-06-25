import React, { useState } from "react";

const Counter = () => {
    let [count,setCount] = useState("jadu");
  return (
    <div>
        {count==='Hello'?(
      <p>true</p>
      ):(<p>false</p>)}
      <div>
        <p>Some random content in the second div.</p>
        <span style={{fontWeight: "bold"}}>{count}</span>
      </div>
      <div>
        <p>Some random content in the third div.</p>
        <span style={{fontWeight: "bold"}}>{count}</span>
      </div>
      <button onClick={()=>{setCount("Hello");}}>Add</button>
    </div>
  );
};

export default Counter;
