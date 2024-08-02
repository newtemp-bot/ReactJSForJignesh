import React, { useEffect, useState } from 'react'

const useAddTen = (data) => {
    const [value,setValue] =  useState(data);
  useEffect(()=>{
    setValue(value+10);
  },[]);
  return [value];
}

export default useAddTen