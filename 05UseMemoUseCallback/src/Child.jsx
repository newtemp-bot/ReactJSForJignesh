import React, { memo } from 'react'

const Child = ({c,setC}) => {
    console.log("Child called...");
  return (
    <></>
  )
}

export default memo(Child)