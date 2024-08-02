import React, { useEffect, useState } from 'react'
import useAddTen from './useAddTen'
import useFetch from './useFetch';

const App = () => {
  let [value] = useAddTen(50);
  let [test] = useAddTen(5);
  let [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {value}
      <br></br>
      {test}
      {
        data && 
        data.map(e=>{
          return <p key={e.id}>{e.title}</p>;
        })
      }
    </>
  )
}

export default App