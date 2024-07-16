import React, { createContext, useContext, useState } from 'react'

let con = createContext();

const DemoData = () => {
    let user = useContext(con);
  return (
    <div>DemoData
        {user}
    </div>
  )
}

const Test = () => {
    let user = useContext(con);
  return (
    <div>Test
        {user}
    </div>
  )
}

const UseContextEx = () => {
    let [user,setUser] = useState("Hello user");
  return (
    <>
    <Test/>
    <con.Provider value={user}>
    <DemoData/>
    </con.Provider>
    </>
  )
}

export default UseContextEx