import React, { useState } from 'react'
import logo from './logo.svg'
import './assets/styles/app.scss'
import './assets/styles/tailwind.scss'
import { validURL } from './assets/js/utils'

function App() {
  const [url, setUrl] = useState("")
  const generateUrl = e => {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Welecom to BoomBoom  URL Shortener</p>
        <input type="text" placeholder="Paste url..." onKeyDown={generateUrl} />

      </header>
    </div>
  )
}

export default App
