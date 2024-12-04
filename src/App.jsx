import { useEffect, useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HomeBanner'
import CardData from './components/CardData'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'



function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path="/detail/:id" element={<Details/>} />
    </Routes>
    </>
  )
}

export default App
