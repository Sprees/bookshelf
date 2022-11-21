import React from 'react'
import {createRoot} from 'react-dom/client'

import '@reach/dialog/styles.css'
import {Dialog} from '@reach/dialog'

import {Logo} from './components/logo'

const LoginForm = ({onSubmit, buttonText}) => {
  const handleSubmit = e => {
    e.preventDefault()
    const {username, password} = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input id="username" type="text" />
      </div>
      <div>
        <input id="password" type="password" />
      </div>
      <div>
        <button>{buttonText}</button>
      </div>
    </form>
  )
}

const App = () => {
  const [openModal, setOpenModal] = React.useState('none')

  const handleSubmit = formData => {
    console.log('Form Data: ', formData)
  }

  return (
    <div>
      <Logo height="80" width="80" />
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('register')}>Register</button>

      {openModal === 'login' && (
        <Dialog aria-label="Login Form">
          <LoginForm onSubmit={handleSubmit} buttonText="Login" />
          <div>
            <button onClick={() => setOpenModal('none')}>Close</button>
          </div>
        </Dialog>
      )}

      {openModal === 'register' && (
        <Dialog aria-label="Registeration Form">
          <LoginForm onSubmit={handleSubmit} buttonText="Login" />
          <div>
            <button onClick={() => setOpenModal('none')}>Close</button>
          </div>
        </Dialog>
      )}
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
