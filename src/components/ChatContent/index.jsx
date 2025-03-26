import React, { useState } from "react";
import styles from "./styles.module.css";
import ChatForm from "../ChatForm";
import MarkdownRenderer from "../MarkdownRenderer"; // Importa el componente

function ChatContent() {
  const [messages, setMessages] = useState([]);

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
            <div className={`container d-flex flex-column gap-3 ${styles.chat_box}`}>
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
