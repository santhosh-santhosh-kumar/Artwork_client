import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import {Context} from "./Store/Context"
import HomeGallery from './Components/Gallery/HomeGallery'
import PortraitPainting from './Components/Gallery/PortraitPainting'
import Figure from './Components/Gallery/Figure'
import AbstractPainting from './Components/Gallery/AbstractPainting'
import JewellaryPainting from './Components/Gallery/JewellaryPainting'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Context>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/gallery' element={<HomeGallery />}></Route>
      <Route path='/portrait' element={<PortraitPainting />}></Route>
      <Route path='/figure' element={<Figure />}></Route>
      <Route path='/abstract' element={<AbstractPainting />}></Route>
      <Route path='/jewellary' element={<JewellaryPainting />}></Route>
    </Routes>
    </BrowserRouter>
    </Context>
    </>
  )
}

export default App
