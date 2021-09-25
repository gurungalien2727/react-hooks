import React,{useState, useRef} from 'react';
// storing a reference to a component and does not cause re-render
const UseRefHook = () => {
  
    const inputRef = useRef();
    const [name, setName] = useState('');
    
    
    return (<>
       <p>Use Ref Hook</p>
       <input ref ={inputRef} value={name} onChange={(e)=>setName(e.target.value)} />
       <button onClick={()=>inputRef.current.focus()}>click</button>
        </>)
}

export default UseRefHook;