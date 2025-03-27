import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
import ChatForm from "../ChatForm";
import MarkdownRenderer from "../MarkdownRenderer"; // Importa el componente

import IconBook from "../../assets/icons/smart-book.svg";
import IconNotas from "../../assets/icons/smart-book-pencil.svg";
import IconStar from "../../assets/icons/smart-star.svg";
import IconImg from "../../assets/icons/smart-img-load.svg";
import IconMore from "../../assets/icons/smart-more.svg";

function ChatContent() {
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages])

  const handlerMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <>
      <div className={`d-flex flex-column justify-content-between ${styles.content_chat_heigth}`}>
        <div className={`d-flex flex-column w-100 align-items-between my-3 ${styles.chat_container}`}>
          <div className={`d-flex justify-content-center ${messages.length === 0 ? styles.title_visibility : styles.title_hidden}`}>
            <p className="h2 main_title">¿Con qué puedo ayudarte?</p>
          </div>

          {/* Área de mensajes */}
          <div ref={chatBoxRef} className={`container d-flex flex-column gap-3`}>
            {messages.map(({ message, isUser }, index) => (
              <div
                key={index}
                className={`p-3 rounded-3 ${isUser ? "bg-primary text-white align-self-end" : "bg-light align-self-start"}`}
                style={{ maxWidth: "80%" }}
              >
                {isUser ? (
                  message // Mensaje del usuario (texto plano)
                ) : (
                  <MarkdownRenderer content={message} /> // Mensaje del bot (Markdown)
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <div className={`d-flex justify-content-center ${messages.length === 0 ? styles.title_visibility : styles.title_hidden}`}>
            <div className="w-100 d-flex justify-content-center flex-wrap mt-lg-4  mb-3" style={{ maxWidth: "1200px" }}>
              <div className="d-flex flex-row gap-2 flex-wrap justify-content-center align-items-center">
                <button className="btn btn-info d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#about">
                  <img src={IconBook} alt="ear" width={13} />
                  <span className={`text-white ${styles.font_size} ms-1`}> Resumen texto </span>
                </button>

                <button className="btn btn-info d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#helpWriter">
                  <img src={IconNotas} alt="ear" width={13} />
                  <span className={`text-white ${styles.font_size} ms-1`}> Ayúdame a escribir </span>
                </button>

                <button className="btn btn-info d-flex justify-content-center align-items-center">
                  <img src={IconStar} alt="ear" width={13} />
                  <span className={`text-white ${styles.font_size} ms-1`}> Sorpréndeme </span>
                </button>

                <button className="btn btn-info d-flex justify-content-center align-items-center">
                  <img src={IconImg} alt="ear" width={13} />
                  <span className={`text-white ${styles.font_size} ms-1`}> Análisis de imágenes </span>
                </button>

                <button className="btn btn-info d-flex justify-content-center align-items-center">
                  <img src={IconMore} alt="ear" width={13} />
                  <span className={`text-white ${styles.font_size} ms-1`}> Más </span>
                </button>
              </div>
            </div>
          </div>
          <ChatForm sendMessage={handlerMessage} />
        </div>
      </div>
    </>
  );
}

export default ChatContent;
