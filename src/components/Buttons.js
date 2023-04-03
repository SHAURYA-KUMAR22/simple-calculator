import React from 'react'

export default function Buttons({handle, clearVal, calc, reduce}) {

  const handleClick =(e) =>{
    handle(e.target.value)
  }
  return (
    <div className="all-btn">
      <button className="btn" onClick={handleClick} value="7">7</button>
      <button className="btn" onClick={handleClick} value="8">8</button>
      <button className="btn" onClick={handleClick} value="9">9</button>
      <button className="btn op" onClick={handleClick} value="+">+</button>
      <button className="btn" onClick={handleClick} value="4">4</button>
      <button className="btn" onClick={handleClick} value="5">5</button>
      <button className="btn" onClick={handleClick} value="6">6</button>
      <button className="btn op" onClick={handleClick} value="-">-</button>
      <button className="btn" onClick={handleClick} value="1">1</button>
      <button className="btn" onClick={handleClick} value="2">2</button>
      <button className="btn" onClick={handleClick} value="3">3</button>
      <button className="btn op" onClick={handleClick} value="*">X</button>
      <button className="btn" onClick={handleClick} value="0">0</button>
      <button className="btn" onClick={handleClick} value=".">.</button>
      <button className="btn op" onClick={reduce} value="Del">Del</button>
      <button className="btn op" onClick={handleClick} value="/">/</button>
      <button className="btn equal" onClick={calc} value="=">=</button>
      <button className="btn op" onClick={clearVal} value="C">C</button>
      
    </div>
  )
}
