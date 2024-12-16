import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
    </>
  )
}

export default App
