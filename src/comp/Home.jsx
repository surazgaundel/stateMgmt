import {useContext} from 'react'
import { useQuery } from '@tanstack/react-query'
import { AppContext } from '../App'
import  Axios from 'axios'

export default function Home() {
    const {count} = useContext(AppContext)
    const {data:catData,isLoading,isError,refetch}=useQuery(['cat'],()=>{
        return Axios.get("https://catfact.ninja/fact").then(res=>res.data);
    });
    if(isError){
        return <p>Sorry, error</p>
    }
    if(isLoading){
        return<p>Loading..</p>
    }
  return (
    <div>No of Home is {count} and {catData?.fact}
    <button onClick={refetch}>Update</button>
    </div>
    
  )
}
