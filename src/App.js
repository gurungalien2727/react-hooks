// import UseStateHook from './hooks/UseStateHook'
// import UseEffectHook from './hooks/UseEffectHook'
// import UseRefHook from './hooks/UseRefHook'
// import UseLayoutEffectHook from './hooks/UseLayoutEffectHook'
import UseCallBackHook from './hooks/UseCallBackHook'

const App = () => {
  console.log('app rendered')
  return ( 
    <div className="App">  
    <UseCallBackHook/>
 
    </div>
  );
}

export default App;
