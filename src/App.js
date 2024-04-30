import React, { useState } from 'react'
import './App.css'

function App (){
  const [data,setdata]=useState('')
  const handleClick=(value)=>{
    if (value==='='){
      try{
        setdata(eval(data).toString());
      }catch(error){
        setdata(error)
      }
    } else if (value==='C'){
      setdata('')
    }else if (value==='AC'){
      setdata(data.slice(0,-1));
    }else{
      setdata(data+value); 
    }
  }
return (
    <div>
      <div className="calculator">
        <input type="text"value={data} />
        <div className="buttons">

        <button onClick={()=>handleClick(7)}>7</button> 

<button onClick={()=>handleClick(8)}>8</button> 

<button onClick={()=>handleClick(9)}>9</button> 

<button onClick={()=>handleClick('+')}>+</button> 

<button onClick={()=>handleClick(4)}>4</button> 

<button onClick={()=>handleClick(5)}>5</button> 

<button onClick={()=>handleClick(6)}>6</button> 

<button onClick={()=>handleClick('-')}>-</button> 

<button onClick={()=>handleClick(1)}>1</button> 

<button onClick={()=>handleClick(2)}>2</button> 

<button onClick={()=>handleClick(3)}>3</button> 

<button onClick={()=>handleClick('*')}>*</button> 

<button onClick={()=>handleClick(0)}>0</button> 

<button onClick={()=>handleClick('C')}>C</button> 

<button onClick={()=>handleClick('=')}>=</button> 

<button onClick={()=>handleClick('/')}>/</button> 

<button onClick={()=>handleClick('AC')}>AC</button> 


        </div>
      </div>
    </div>
  )
}

export default App
