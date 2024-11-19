import React from 'react'
import Home from  "./component/Home"
import Navbar from './component/Navbar'
import About from './pages/About'
import Menu from './pages/Menu'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/menu' element={<Menu/>} />
    </Routes>
  </>
</BrowserRouter>
  )
}

export default App
