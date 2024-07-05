import { useState } from 'react'
import './App.css'

function App() {

  let [color,setColor] = useState('green');

  return (
    <div className='container' style={{backgroundColor: color}}>
      <button onClick={()=>setColor("red")} style={{backgroundColor:'red',color:'white'}}>Red</button>&emsp;
      <button onClick={()=>setColor("blue")} style={{backgroundColor:'blue',color:'white'}}>Blue</button>&emsp;
      <button onClick={()=>setColor("green")} style={{backgroundColor:'green',color:'white'}}>Green</button>&emsp;
      <button onClick={()=>setColor("yellow")} style={{backgroundColor:'yellow'}}>Yellow</button>&emsp;
      <button onClick={()=>setColor("pink")} style={{backgroundColor:'pink',color:'white'}}>Pink</button>
    </div>
  )
}

export default App
