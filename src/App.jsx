import React, { useState } from 'react'
import { AiOutlineEnter } from "react-icons/ai";
import './assets/styles/app.scss'
import './assets/styles/tailwind.scss'
import 'sweetalert2/src/sweetalert2.scss'
import { validURL, showAlert } from './assets/js/utils'

function App() {
  const [isEnter, setIsEnter] = useState(false)
  const [shortUrl, setShortUrl] = useState()

  const resetInput = () => {
    document.querySelector(".urlInput").value = ""
  }
  const generateUrl = () => {
    let url = document.querySelector(".urlInput").value;
    console.log(validURL(url))
    resetInput()
  }
  const onEnter = e => {
    if (e.key === 'Enter') {
      setIsEnter(true)
      generateUrl()
      resetInput()
    } else {
      setShortUrl()
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Welecom to BoomBoom  URL Shortener</p>
        <div className="inputLayout">
          <div>
            <input className="urlInput" type="text" placeholder="Paste url... 😎  🚀" onKeyDown={onEnter} onKeyUp={() => setIsEnter(false)} />
          </div>
          <button className={"iconEnter" + (isEnter ? ":active" : "")} onClick={generateUrl}>
            <AiOutlineEnter />
            <span>Enter</span>
          </button>
        </div>
        <div className="displayResult">
          <div className={shortUrl ? 'copyTag' : 'failTag'}>
            {shortUrl ? 'Copied!' : 'Failure'}
          </div>
          <div>
            {shortUrl ? <p>shortUrl.url</p> : 'https://tailwindcss.com/docs/flex'}
          </div>
        </div>
      </header>
    </div >
  )
}

export default App
