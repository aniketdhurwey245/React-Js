import { useState } from 'react' //import useState which is a hooke

function App() {
  // how to useState hooke
  let [counter, setCounter] =useState(15)

  // let counter = 15;

  const addValue = () =>{
    if(counter <= 19){
      console.log('clicked', counter)
    counter += 1
    setCounter(counter)

    }else{
      alert("addValue is limit over")
    }
    
  }

  const removeValue = ()=>{

    if(counter >= 1){
     setCounter(counter-1)
    }else{
      alert("remove value is over")
    }
    
  }
  
   
  return (

    <>
     <h1>React Project</h1>
    <h3>Counter Value: {counter}</h3>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>
    {/* UI updation controlled by react so we use hooke for multiple change in variable */}

    </>
   
  )
}

export default App
