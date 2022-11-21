import React from 'react'
import {createRoot} from 'react-dom/client'

import '@reach/dialog/styles.css'
import {Dialog} from '@reach/dialog'

import {Logo} from './components/logo'

const App = () => {
  const [openModal, setOpenModal] = React.useState('none')

  return (
    <div>
      <Logo height="80" width="80" />
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('register')}>Register</button>

      {openModal === 'login' && (
        <Dialog>
          <p>This is the Login Modal</p>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </Dialog>
      )}

      {openModal === 'register' && (
        <Dialog>
          <p>This is the Register Modal</p>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </Dialog>
      )}
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
