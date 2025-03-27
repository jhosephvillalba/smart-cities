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
        <div className={`d-flex flex-column w-100 my-3 ${styles.chat_container}`}>
          <div className={`d-flex justify-content-center my-5 ${messages.length === 0 ? styles.title_visibility : styles.title_hidden}`}>
            <p className="h2 main_title text-center">¿Con qué puedo ayudarte?</p>
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
        <div className="d-flex justify-content-center">
          <ChatForm sendMessage={handlerMessage} />
        </div>
      </div>
    </>
  );
}

export default ChatContent;
