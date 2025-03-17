import React, { useState } from "react"
import Navbar from "./components/Navbar"
import ChatContent from "./components/ChatContent"
import "./App.css"

function App() {
  const [ fade, setFade ] = useState(false)
  return (
    <>
      <main className={`main-container main-container-bg d-flex flex-column justify-content-between ${fade ? "transparent" : ""}`}>
        <header>
          <Navbar set={setFade} fade={fade}/>
        </header>
        <div className="container-sm chat-container h-100">
        <div className="d-flex w-100 justify-content-center form-check form-switch">
          <input
              className={`form-check-input switch_size`}
              type="checkbox"
              onClick={() => setFade(!fade)}
              defaultChecked={fade}
          />
          </div>
          <ChatContent />
        </div>
          <footer className="d-flex justify-content-center">
            <div className="text_footer">
              <p className="text-center">Al enviar un mensaje a Ciudades Inteligentes, aceptas nuestros <a href="#"><span>Términos</span></a> y reconoces que leíste nuestra <a href=""><span>Política de privacidad.</span></a></p>
            </div>
          </footer>
      </main>
    </>
  )
}

export default App
