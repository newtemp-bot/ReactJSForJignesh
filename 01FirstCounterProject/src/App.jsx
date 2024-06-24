import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

const changevalue = (value="") => {
  if(value==='add')
    {
       setCount(count => count + 1);
    }
    else
    {
      setCount(count => count - 1);
    }
};


  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        count is {count} <br/>
        <br/>
        <br/>
        <button onClick={() => changevalue("add") }>
          Add by 1
        </button>
        &nbsp;
        <button onClick={changevalue}>
          Remove by 1
        </button>
      </div>
    </>
  )
}

export default App
