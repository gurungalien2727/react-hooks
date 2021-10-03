// import UseStateHook from './hooks/UseStateHook'
// import UseEffectHook from './hooks/UseEffectHook'
// import UseRefHook from './hooks/UseRefHook'
// import UseLayoutEffectHook from './hooks/UseLayoutEffectHook'
//import UseCallBackHook from './hooks/UseCallBackHook'
//import UseMemoHook from './hooks/UseMemoHook'
//import UseReducerHook from './hooks/UseReducerHook'
import React, {useContext} from 'react'
import UseContextHook from './hooks/UseContextHook'

export const UserDetailContext = React.createContext();

const App = () => {
  console.log('app rendered')
  return ( 
    <div className="App"> 
    <UserDetailContext.Provider value = {{name:'alien',age:26}}>
      <UseContextHook/>
      </UserDetailContext.Provider>
    </div>
  );
}



export default App;
