import { useState,createContext } from 'react'
import Home from './comp/Home'
import './App.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';


export const AppContext=createContext();


function App() {
  const [count, setCount] = useState(100)
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
        <Home/>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  )
} 

export default App
