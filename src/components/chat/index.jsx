import React, { useState } from "react";
import styles from "./styles.module.css";
import BoxMessage from "../BoxMessage";

import IconLoupe from "../../assets/icons/loupe-white.svg";
import IconUpload from "../../assets/icons/focus-white.svg";

import IconProcess from "../../assets/icons/icon-process.svg";

import IconBook from "../../assets/icons/icon-book.svg";
import MoreServices from "../../assets/icons/+smart.svg";
import SmartCities from "../../assets/icons/technocorp-black.svg";
import SmartCitiesLigth from "../../assets/icons/technocorp-white.svg";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewChat = ({ sendMessage, chatInit, activeChatBox, darkMode }) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/help");
  };

  const handlerInput = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setIsLoading(true);
    sendMessage({ message: userMessage, isUser: true });

    try {
      const response = await axios.post("https://mirionegro.com/api/chat/", {
        message: userMessage,
      });

      // console.log({response}); 

      const botReply = response.data.response;

      sendMessage({ message: botReply, isUser: false });
    } catch (error) {
      console.error("Error al llamar a la API:", error);
      sendMessage({
        message: "❌ Error al obtener respuesta",
        isUser: false,
      });
      setInput(userMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center mt-2">
        <div className="d-flex flex-column align-items-center w-100" style={{ maxWidth: "830px" }}>

          <div className="d-lg-none w-100">
            <div className="d-flex justify-content-start align-items-center mt-lg-4 mb-lg-4 mb-3 mt-3 w-100" style={{ maxWidth: "1200px" }}>
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-center w-100">
                <button className="btn btn-info d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#about" onClick={activeChatBox}>
                  <img src={IconBook} alt="ear" width={13} />
                  <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
                    Contacta un agente de ventas
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: chatInit > 0 ? "block" : "none" }}>
            <div className="d-none d-lg-block">
              <div className="d-flex justify-content-lg-center justify-content-md-end align-items-center  mb-lg-2 w-100" style={{ maxWidth: "1200px" }}>
                <div className="d-flex gap-3 justify-content-start justify-content-lg-center w-100">
                  <button className="btn btn-info d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#about" onClick={activeChatBox}>
                    <img src={IconBook} alt="ear" width={13} />
                    <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
                      Contacta un agente de ventas
                    </span>
                  </button>
                  <button onClick={handleLogin} className="btn btn-info d-flex justify-content-center align-items-center">
                    <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
                      Preguntas frecuentes
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={`w-100 ${styles.container_chat_text} position_text_input`}>
            <textarea
              value={input}
              placeholder="Envia un mensaje a OdinIA"
              style={{ width: "100%", minHeight: chatInit > 0 ? "60px" : "100px", height: chatInit > 0 ? "62px" : "100px"}}
              className={`${styles.input_text} input_text_bg_dark ${styles.font_family}`}
              onChange={handlerInput}
              onKeyDown={handleKeyPress}
            ></textarea>

            <div className={`w-100 d-flex ${styles.container_chat_buttons} justify-content-between`}>
              <div className="d-none d-lg-block">
                <div className="d-flex flex-row gap-3">
                  <button type="submit" className="btn btn-primary d-flex justify-content-center align-items-center">
                    {isLoading ? (<div className="spinner-border spinner-border-sm" role="status"><span className="visually-hidden">Loading...</span></div>) : (<img src={IconLoupe} alt="search" width={14} />)}
                    <span className={`${styles.font_family_text_btn} ms-2`}>Buscar</span>
                  </button>

                  <button className="btn btn-primary d-flex justify-content-center align-items-center">
                    <img src={IconUpload} alt="upload" width={14} />
                    <span className={`${styles.font_family_text_btn} ms-3`}>Analiza</span>
                  </button>
                  {/* <button className="btn btn-primary d-flex justify-content-center align-items-center">
                    <img src={IconFocus} alt="upload" width={14} />
                    <span className={`${styles.font_family_text_btn} ms-3`}>Analiza</span>
                  </button> */}
                </div>
              </div>

              <div className="d-lg-none">
                <div className="d-flex gap-3">
                  <button type="submit" className="btn btn-primary d-flex justify-content-center align-items-center">
                    {isLoading ? (<div className="spinner-border spinner-border-sm" role="status"><span className="visually-hidden">Loading...</span></div>) : (<img src={IconLoupe} alt="search" width={14} />)}
                    <span className={`${styles.font_family_text_btn} ms-2`}>Buscar</span>
                  </button>

                  <div className="dropdown">
                    <button className="btn btn-primary custom-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={MoreServices} alt="more services" />
                    </button>
                    <ul className="dropdown-menu p-4">
                      <li className="my-2">
                        <a className="d-flex justify-content-start gap-3 text-decoration-none">
                          <img src={IconUpload} alt="upload" />
                          <span className={`${styles.font_family_text_btn}`}>Adjuntar</span>
                        </a>
                      </li>
                      {/* <li className="my-2">
                        <a className="d-flex justify-content-start gap-3 text-decoration-none">
                          <img src={IconFocus} alt="upload" />
                          <span className={`${styles.font_family_text_btn}`}>Analiza</span>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-row gap-3">
                <button className="btn btn-secondary d-flex justify-content-center align-items-center">
                  <img src={IconProcess} alt="ear" width={13} />
                  <span className={`text-white ${styles.font_family_text_btn} ms-3`}>
                    Voice
                  </span>
                </button>
              </div>
            </div>
          </form>

          <div style={{ display: chatInit > 0 ? "none" : "block" }}>
            <div className="d-none d-lg-block">
              <div className="d-flex justify-content-lg-center justify-content-md-end align-items-center mt-lg-4 mb-lg-4 mb-3 mt-3 w-100" style={{ maxWidth: "1200px" }}>
                <div className="d-flex gap-3 justify-content-start justify-content-lg-center w-100">
                  <button className="btn btn-info d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#about" onClick={activeChatBox}>
                    <img src={IconBook} alt="ear" width={13} />
                    <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
                      Contacta un agente de ventas
                    </span>
                  </button>
                  <button onClick={handleLogin} className="btn btn-info d-flex justify-content-center align-items-center">
                    <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
                      Preguntas frecuentes
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: chatInit > 0 ? "none" : "block" }} className="w-100">
          <div className="d-flex justify-content-center px-5 w-100 my-lg-1 my-3 justify-content-lg-end">
            <a href="https://www.grupotechnocorp.com/" target='_blank' rel="noopener noreferrer">
              {
                darkMode === true ? <img src={SmartCitiesLigth} width={150} alt="smart-cities" /> : <img src={ SmartCities} width={150} alt="smart-cities" />
              }
            </a>
          </div>
        </div>
      </div>

      <div className="modal fade modal-dialog-scrollable" id="about" data-bs-backdrop="false" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <BoxMessage show={true} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewChat;
