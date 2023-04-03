import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'

export default function Board() {
  const [currentVal, setCurrentVal] = useState('')
  const [classval, setClassVal] = useState("res") // for animatio pupose

  function handle(val){
    console.log(val)
    setCurrentVal((prevcurrenVal) => prevcurrenVal+val)
  }

  const clearVal =() => {
    setCurrentVal('')
  }

  const calc = () =>{
    let ans
    try {
      ans = eval(currentVal);
      setCurrentVal(ans)
      setClassVal('res-demand')
    } catch (e) { 
      alert("Invalid Calculation");
      setCurrentVal('')
    }
    
    
  }

  const reduce =() => {
    let newres = currentVal
    newres = newres.slice(0,-1)
    setCurrentVal(newres)
  }

  useEffect(() => {
    setTimeout(() => {
      setClassVal("res")
    },1000)
    
  },[classval])

  return (
    <div className="board">
      <div className={classval}>{currentVal}</div>
      <Buttons handle={handle} clearVal={clearVal} calc={calc} reduce={reduce}/>
    </div>
  )
}
