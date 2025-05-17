import { useState } from 'react'


import './App.css'

function App() {
 let [counter ,setCounter]=useState(15)
 const add=()=>{
  setCounter(counter+1)
 }
 const remove=()=>{

setCounter(counter-1)

 }
  return (
    <>
    <h1>basic counter project</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={add}>Add value</button><br/>
    <button onClick={remove}>Remove value</button>
    </>
  )
}

export default App
