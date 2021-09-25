import React,{useState} from 'react';

const UseStateHook = () => {
    console.log('Use State Hook');
    const [count, setCount] = useState(0);
    return (<>
       <p>Use State Hook</p>
       <p>{count}</p> 
       <button onClick = {()=>setCount(currentCount => currentCount + 1)}>Click</button>
        </>)
}

export default UseStateHook;