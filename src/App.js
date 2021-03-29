import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Contact from './views/Contact'
import Home from './views/Home'
import Portfolio from './views/Portfolio'

function App () {
  const [views] = useState([
    'home',
    'portfolio',
    'contact'
  ])

  const [currentView, setCurrentView] = useState('home')

  return (
    <>
      <main>
        <Nav currentView={currentView} setCurrentView={setCurrentView} views={views} />
        <div className='container my-5'>
          {currentView === 'contact' && <Contact />}
          {currentView === 'home' && <Home />}
          {currentView === 'portfolio' && <Portfolio />}
        </div>
        <div class='push' />
      </main>
      <Footer />
    </>
  )
}

export default App
