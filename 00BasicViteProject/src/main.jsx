import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Test from './Test'
import ClassCompo from './ClassCompo'
import ListEx from './ListEx'

const jadu = React.createElement('p',{name:"kalal",className:"container",style:{border:'5px solid red'}},'Hello How are you?');

ReactDOM.createRoot(document.getElementById('root')).render(
    <>{/* {jadu}
    <Test/>
    <ClassCompo/> */}
    <ListEx/>
    </>
)

/* const con = document.getElementById('root');
const root = ReactDOM.createRoot(con);
root.render(
  <App/>
)
 */