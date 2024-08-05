import React, { useEffect, useLayoutEffect, useState } from 'react'

const App = () => {
  let [value,setValue] = useState("Bascom");
  useEffect(()=>{
    console.log(
      "UseEffect is called with the value of ",
      value
  );
  },[value]);
  useLayoutEffect(()=>{
    console.log(
      "UseLayoutEffect is called with the value of ",
      value
      
  );
  },[value]);
  setTimeout(()=>{
    setValue("Aashka")
  },2000)
  return (
    <>
        <h1>Hello : {value}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae voluptatem perferendis dignissimos, veniam doloribus officiis ullam
           nihil sapiente saepe quibusdam amet ipsum laboriosam maxime fugiat laborum temporibus quasi id delectus?
        </p>
    </>
  )
}

export default App