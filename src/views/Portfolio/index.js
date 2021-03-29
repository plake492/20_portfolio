import React, { useState } from 'react'

const Portfolio = () => {
  const [photos] = useState([
    {
      img: 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2549&q=80',
      alt: 'Portfolio Image'
    },
    {
      img: 'https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80',
      alt: 'Portfolio Image'
    },
    {
      img: 'https://images.unsplash.com/photo-1516054719048-38394ee6cf3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2449&q=80',
      alt: 'Portfolio Image'
    },
    {
      img: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80',
      alt: 'Portfolio Image'
    }
  ])

  const [selectedImg, setSelectedIng] = useState(null)

  const hoverImg = (i) => {
    setSelectedIng(i)
  }

  return (
    <section className='bg-dark text-white px-4'>
      <div className='row'>
        {photos.map(({ img, alt }, i) => (
          <div key={i} className='col-md-6 my-4'>
            <div className='position-relative'>
              <img onMouseEnter={() => hoverImg(i)} className='port_img' width='100%' height='100%' src={img} alt={alt} />
              {selectedImg === i && (
                <aside className='position-absolute text-center p-5'>
                  <h3> Google</h3>
                  <a rel='noopener noreferrer' target='_blank' href='https://www.google.com/'>LINK</a>
                </aside>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
