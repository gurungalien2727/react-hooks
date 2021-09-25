import React, {useEffect} from 'react';


const Hello = () =>{

    useEffect(()=>{
        console.log('Hello Component Mounted');

        return(()=>console.log('Hello unmounted'))

    }, [])

    return (<div>
        Hello
    </div>)


}

export default Hello;