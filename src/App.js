import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Contact from './views/Contact'
import Home from './views/Home'

function App () {
  const [views] = useState([
    'home',
    'about',
    'portfolio',
    'contact'
  ])
  const [currentView, setCurrentView] = useState('home')

  return (
    <>
      <main>
        <Nav currentView={currentView} setCurrentView={setCurrentView} views={views} />
        <div className='container mt-5'>
          {currentView === 'contact' && <Contact />}
          {currentView === 'home' && <Home />}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
