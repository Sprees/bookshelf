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
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog aria-label="Login Form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={handleSubmit} buttonText="Login" />
      </Dialog>

      <Dialog aria-label="Registeration Form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={handleSubmit} buttonText="Register" />
      </Dialog>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
