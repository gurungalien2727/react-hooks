import React, {useState, useMemo, useCallback} from 'react';

// memomizing the computed value 
const UseMemoHook = () => {
    console.log('Use memo hook rendered')
    let count = 0;
    const [age, setAge] = useState(24);
    const [data, setData] = useState('');
  const   compute= useCallback(()=> {
       console.log('function rendered');
       let i = 0;
       for(i=0; i< 100000; i++){
           count++;
       }

       return count;
   }, [] )

   let val= useMemo(()=>compute(), [compute]);
    return (<>
       <p>Use memo hook </p>
       {val}
       <button onClick={()=>setAge(age=>age+1)}>Increment Age</button>
       {age}
        </>
        )
}

export default UseMemoHook;