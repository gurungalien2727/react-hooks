import React, {useContext} from 'react'
import { UserDetailContext } from '../App'

const UseContextHook = () =>{

    const userDetails = useContext(UserDetailContext)
    console.log('UseContext rendered')

return (
    
<>
<p>Use ContextHook</p>
 <p>{userDetails.name}</p>
<p>{userDetails.age}</p> 
</>)
}

export default UseContextHook;