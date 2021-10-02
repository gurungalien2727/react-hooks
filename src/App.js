// import UseStateHook from './hooks/UseStateHook'
// import UseEffectHook from './hooks/UseEffectHook'
// import UseRefHook from './hooks/UseRefHook'
// import UseLayoutEffectHook from './hooks/UseLayoutEffectHook'
//import UseCallBackHook from './hooks/UseCallBackHook'
//import UseMemoHook from './hooks/UseMemoHook'
import UseReducerHook from './hooks/UseReducerHook'

const App = () => {
  console.log('app rendered')
  return ( 
    <div className="App">  
    <UseReducerHook/>
 
    </div>
  );
}

export default App;
