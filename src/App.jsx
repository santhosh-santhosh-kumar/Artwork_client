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
import PortraitDetails from './Components/Details/PortraitDetails'
import FigureDetails from './Components/Details/FigureDetails'
import AbstractDetails from './Components/Details/AbstractDetails'
import JewellaryDetails from './Components/Details/JewellaryDetails'
import Creater from './Components/Creater/Creater'
import SculpturePainting from './Components/Gallery/SculpturePainting'
import SculptureDetails from './Components/Details/SculptureDetails'
import PortraitMobileDetail from './Components/Mobile/MobileDetails/PortraitMobileDetail'
import FigureMobileDeatils from './Components/Mobile/MobileDetails/FigureMobileDeatils';
import AOS from 'aos';
import "aos/dist/aos.css";

AOS.init()

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
      <Route path='/sculpture' element={<SculpturePainting />}></Route>
      <Route path='/portrait/:id'  element={<PortraitDetails />}></Route>
      <Route path='/figure/:id' element={<FigureDetails />}></Route>
      <Route path='/abstract/:id' element={<AbstractDetails />}></Route>
      <Route path='/jewellary/:id' element={<JewellaryDetails />}></Route>
      <Route path='/sculpture/:id' element={<SculptureDetails />}></Route>
      <Route path='/creater' element={<Creater />}></Route>
    </Routes>
    </BrowserRouter>
    </Context>
    </>
  )
}

export default App
