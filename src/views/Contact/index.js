import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState('')

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const { name, email, message } = formState

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      const isValid = validateEmail(target.value)
      console.log(isValid)
      if (!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('')
      }
    } else {
      if (!target.value.length) {
        setErrorMessage(`${target.name} is required.`)
      } else {
        setErrorMessage('')
      }
    }
    console.log('errorMessage', errorMessage)
    if (!errorMessage) {
      setFormState({ ...formState, [target.name]: target.value })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <section className='bg-dark text-white p-4'>
      <h1>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            className='form-control'
            type='text'
            name='name'
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email address:</label>
          <input
            className='form-control'

            type='email'
            name='email'
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea
            className='form-control'

            name='message'
            rows='5'
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default ContactForm
