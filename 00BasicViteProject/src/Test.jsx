import { useState } from "react";


const Test = () => {
    let [val,setVal] = useState("Hello");
    let test = "";
    const loops = () => {
        for (let i = 0; i < 10; i++) {
            test += val;
        }
    }
    const agecheck = age => {
        if (age>=18) {
            setVal(<b>Eligable</b>);
        }
        else
        {
            setVal(<b>Not Eligable</b>);
        }
    }
  return (<>
  {loops()}
  {test}
    <button onClick={()=>agecheck(18)}>ok</button>
  <h1>Hello {10 + 12}</h1></>);
};
export default Test;
