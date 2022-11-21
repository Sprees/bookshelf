import React from 'react'
import {createRoot} from 'react-dom/client'

import {Logo} from './components/logo'

const App = () => {
  return (
    <div>
      <Logo height="80" width="80" />
      <button onClick={() => alert("You've pressed me!")}>Login</button>
      <button onClick={() => alert("You've pressed me!")}>Register</button>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
