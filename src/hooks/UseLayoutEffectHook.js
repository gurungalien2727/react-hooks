import React,{useState, useRef, useLayoutEffect} from 'react';

// fires synchronously after DOM mutations
const UseLayoutEffectHook = () => {
  
const inputRef=useRef();
    
    useLayoutEffect(()=>{
      console.log(inputRef.current.getBoundingClientRect())
    }, [] )
    
    return (<>
    <input ref={inputRef} ></input>
       <p>Use Layout Effect Hook</p>
        </>)
}

export default UseLayoutEffectHook;