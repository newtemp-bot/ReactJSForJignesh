import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PropsEx from './PropsEx.jsx'

let jadu = "random";
const carInfo = { name: "Ford", model: "Mustang" };
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/*<App />*/}
    <PropsEx brand="BMW" random={1321} carInfo={carInfo}/>
    <PropsEx brand="Tata" jadu={jadu}/>
  </>,
)
