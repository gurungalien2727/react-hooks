import React, {useReducer} from 'react';

function red (state, action){

    switch(action.type){
     case 'INCREMENT':return state+1;
     case 'DECREMENT':return state-1;
    }

}

const UseReducerHook = () => {

const [count, dispatch] = useReducer ( red , 0);
return (<>
<p>Use Reducer Hook</p>
<p>{count}</p>
<button onClick = {()=>dispatch({type:'INCREMENT'})}>Increment</button>
<button onClick = {()=>dispatch({type:'DECREMENT'})}>Decrement</button>
</>)
}

export default UseReducerHook;