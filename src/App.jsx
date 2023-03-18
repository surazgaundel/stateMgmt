import { useState,createContext } from 'react'
import './App.css'
import Home from './comp/Home'
import Form from './comp/Form'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Routes,Router,Route} from 'react-router-dom'
import { OnToggle } from './comp/Toggle';
import {useCount} from './comp/useCount';
export const AppContext=createContext();


function App() {
  const {counte,increaseCount,decreaseCount,ResetCount}=useCount();
  const [count, setCount] = useState(100)
  const[isVisible,handleVisible]= OnToggle();
  const[isVisible1,handleVisible1]= OnToggle();
  const client=new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false 
      }
    }
  });
  function handleClick(){
    setCount(count+1)
  }
 
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{count,setCount}}>
        <h1>State Management System</h1>
        <button onClick={handleClick}>Click</button>
        <button onClick={handleVisible}>{isVisible ?"Hide":'Show'}</button>
        <button onClick={handleVisible1}>{isVisible ?"Hide":'Show'}</button>
        {isVisible&& <h1>Hidden</h1>}
        {isVisible1&& <h1>Show</h1>}
        <button onClick={increaseCount}>Increase</button>
        <button onClick={ResetCount}>Reset</button>
        <button onClick={decreaseCount}>Decrease</button>
        {counte}
        {/* <Router>
          <Routes>
            <Route path='/form' element={<Form/>}/>
          </Routes>
        </Router> */}
        <Home/>
        <Form/>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  )
} 

export default App
