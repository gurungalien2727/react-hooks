import React, {useState, useCallback} from 'react';
import Age from './Age';
import Count from './Count';
// for performance optimization 
const UseCallBackHook = () => {
    
const [count, setCount] = useState(0);
const [age, setAge] = useState(26);

const incrementCount= ()=>{
    setCount((count)=>count+1);
}

const incrementAge=()=>{
    setAge((age)=>age+1);
}

    return (<>
       <p>Use CallBack Hook</p>
       <Age increment={incrementAge}></Age>
       <Count increment={incrementCount}></Count>
        </>
        )
}

export default UseCallBackHook;