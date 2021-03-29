import React from 'react'

const Nav = ({ currentView, setCurrentView, views }) => {
  return (
    <nav className='bg-dark text-white'>
      <div class='d-flex justify-content-between flex-row flex-wrap'>
        <h1 className='ml-2 my-4'>Patrick Lake</h1>
        <ul className='d-flex justify-content-between flex-row align-items-center pt-4'>{views.map((item, i) => (
          <li key={i} className='mx-4'>
            <a href='#' onClick={() => setCurrentView(item)}>{item}</a>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
