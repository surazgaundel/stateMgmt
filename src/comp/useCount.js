import React from 'react'

export  function useCount () {
    const [counte,setCounte]=React.useState(0);

    function increaseCount(){
        setCounte(counte=>counte+1)
    }
    function decreaseCount(){
        setCounte(counte=>counte-1)
    }
    function ResetCount(){
        setCounte(counte=>0)
    }
  return {counte,increaseCount,decreaseCount,ResetCount}
}
