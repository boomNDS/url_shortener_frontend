import React, { useState } from 'react'
import { AiOutlineEnter } from "react-icons/ai";
import './assets/styles/app.scss'
import './assets/styles/tailwind.scss'
import 'sweetalert2/src/sweetalert2.scss'
import { CreateShortUrl } from './assets/js/api'

function App() {
  const [isEnter, setIsEnter] = useState(false)
  const [shortUrl, setShortUrl] = useState()
  const [isShow, setIsShow] = useState(false)

  const resetInput = () => {
    document.querySelector(".urlInput").value = ""
  }
  const generateUrl = async () => {
    try {
      let url = document.querySelector(".urlInput").value;
      let shortURL = await CreateShortUrl(url)
      setShortUrl(shortURL.url)
      copyToClipboard(shortURL.url)
    }
    catch (err) {
      console.log(err)
    }

    setIsShow(true)
    resetInput()
  }
  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
  }

  const onEnter = e => {
    if (e.key === 'Enter') {
      setIsEnter(true)
      generateUrl()
    } else {
      setShortUrl()
    }
  }


  const displayResult = () => {
    return (
      <>
        <div className={shortUrl ? 'copyTag' : 'failTag'}>
          {shortUrl ? 'Copied!' : 'Failure'}
        </div>
        <div>
          {shortUrl ? <a href={shortUrl}>{shortUrl}</a> : 'Try new one.'}
        </div>
      </>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Welecom to BoomBoom  URL Shortener</p>
        <div className="inputLayout">
          <div>
            <input className="urlInput" type="text" placeholder="Paste url... 😎  🚀" onKeyDown={onEnter} onKeyUp={() => setIsEnter(false)} onChange={() => setIsShow(false)} />
          </div>
          <button className={"iconEnter" + (isEnter ? ":active" : "")} onClick={generateUrl}>
            <AiOutlineEnter />
            <span>Enter</span>
          </button>
        </div>
        <div className="displayResult">
          {isShow ? displayResult() : ''}
        </div>
      </header>
    </div >
  )
}

export default App
