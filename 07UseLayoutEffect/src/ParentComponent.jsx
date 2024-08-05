import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const ChildComp = forwardRef((props,ref) => {
    let internalRef = useRef();
    useImperativeHandle(ref,()=>({
        jadu: ()=>{
            internalRef.current.focus();
        }
    }));
    return <input type='text' ref={internalRef}/>
});

const ParentComponent = () => {
    let childRef = useRef();
  return (
    <>
        <ChildComp ref={childRef}/>
        <button onClick={()=>childRef.current.jadu()}>focus</button>
    </>
  )
}

export default ParentComponent