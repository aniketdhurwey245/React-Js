import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    userid:"aniket",
    age:23

  }

  return (
    <>
      <h1 className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mb-2" >Tailwind Test</h1>
      <Card plainText='Science Of Conding And Development' someObj="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci."/>
      {/* in card cannot pass directly array or object we fist define then pass variable */}
      <Card plainText="Coding And Development With Vite+React" someObj={myObj}/>
    </>
  )
}

export default App
