import {useState} from 'react';

export  function OnToggle(){
  const[isVisible,setIsVisible]=useState(false)

  function handleVisible(){
    setIsVisible(prev=>!prev)
  }
  
  return [isVisible,handleVisible]
}
