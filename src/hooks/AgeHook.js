import React,{useMemo} from 'react';

const AgeHook = ({increment}) => {
    console.log('Age rendered')

    return (<>
       <button onClick={increment}>Increment +</button>
        </>
        )
}

export default React.memo(AgeHook);

// memo prevents re-render until the props or state changes because by default child component re-renders if parent component renders