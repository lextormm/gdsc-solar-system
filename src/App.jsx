import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Sun from './Components/Sun/Sun'
import Mercury from './Components/Mercury/Mercury'
import Venus from './Components/Venus/Venus'
import Earth from './Components/Earth/Earth'
import Mars from './Components/Mars/Mars'
import Jupiter from './Components/Jupiter/Jupiter'
import Saturn from './Components/Saturn/Saturn'
import Uranus from './Components/Uranus/Uranus'
import Neptune from './Components/Neptune/Neptune'
import Footer from './Components/Footer/Footer'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sun/>
      <Mercury/>
      <Venus/>
      <Earth/>
      <Mars/>
      <Jupiter/>
      <Saturn/>
      <Uranus/>
      <Neptune/>
      <Footer/>
    </div>
  )
}

export default App
