import React, {useState, useCallback} from 'react';
import AgeHook from './AgeHook';
import CountHook from './CountHook';
// for performance optimization 
// prevents recreation of function after each render
const UseCallBackHook = () => {
console.log('use callback  rendered')
const [count, setCount] = useState(0);
const [age, setAge] = useState(26);

const incrementCount= useCallback(()=>{
    setCount((count)=>count+1);
},[count])

const incrementAge=useCallback(()=>{
    setAge((age)=>age+1);
},[age])

    return (<>
       <p>Use CallBack Hook</p>
       <AgeHook increment={incrementAge}/>
        Age:{age}
       <CountHook increment={incrementCount}/>
        Count:{count}

        </>
        )
}

export default UseCallBackHook;