import React, {useMemo} from 'react';

const CountHook= ({increment}) => {
console.log('Count rendered')
    return (<>
       <button onClick={increment}>Count +</button>
        </>
        )
}

export default React.memo(CountHook);