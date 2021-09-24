import React,{useState} from 'react';

const UseStateHook = () => {
    const [count, setCount] = useState(0);
    return (<>
    
       <p>{count}</p> 
       <button onClick = {()=>setCount(currentCount => currentCount + 1)}>Click</button>
        </>)
}

export default UseStateHook;