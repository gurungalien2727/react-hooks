import React, {useEffect, useState} from 'react';
import Hello from './Hello';

const UseEffectHook = () => {
    console.log('Use Effect Hook')
    const [toggle, setToggle] = useState(true);
    
    useEffect(()=>{
        console.log('Inside Use Effect')
    }, [toggle])
    return (<>
       <p>Use Effect Hook</p>
        {toggle && <Hello/>}
       <button onClick = {()=>setToggle(currentToggle => !toggle)}>Toggle</button>
        </>
        )
}

export default UseEffectHook;