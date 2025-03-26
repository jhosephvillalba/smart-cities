import React, { useState } from "react"
import Navbar from "./components/Navbar"
import ChatContent from "./components/ChatContent"
import Logo from "./assets/icons/empresa.svg"
import "./App.css"

function App() {
  const [fade, setFade] = useState(false)
  return (
    <>
      <main className={`main-container main-container-bg d-flex flex-column justify-content-between ${fade ? "transparent" : ""}`}>
        <header>
          <Navbar set={setFade} fade={fade} />
        </header>
        <div className="container-fluid chat-container">
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
        <footer className="row mt-5 g-2">
          {/* Logo: Primero en móvil, último en escritorio */}
          <div className="col-12 col-md-2 mb-3 order-1 order-md-3">
            <div className="w-100 d-flex justify-content-md-end justify-content-center">
              <img className="logo" src={Logo} alt="Logo" width={50} />
            </div>
          </div>

          {/* Espacio vacío en escritorio */}
          <div className="col-12 col-md-2 h-0 order-2 order-md-1"></div>

          {/* Texto centrado */}
          <div className="col-12 col-md-8 order-3 order-md-2">
            <div className="d-flex justify-content-center align-items-center w-100">
              <div className="text-center">
                <p className="m-0">
                  Al enviar un mensaje a Ciudades Inteligentes, aceptas nuestros
                  <a href="#"><span> Términos </span></a> y reconoces que leíste nuestra
                  <a href="#"><span> Política de privacidad. </span></a>
                </p>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}

export default App
