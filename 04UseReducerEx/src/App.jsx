import { useState } from "react"

function App() {

  //why we need usereducer.
  let [count,setCount] = useState("Hello");

  let test = (value) => {
    setCount(value);
  }
  return (
    <>
      {count}
      <button onClick={()=>test()}>
        ok
      </button>
    </>
  )
}

export default App
