import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import ViewChat from "../../components/chat";
import ChatBubble from "../../components/ChatBubble";
import BoxMessage from "../../components/BoxMessage";


const OdinIa = ({ handlerDarkMode, darkStatus }) => {
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);
    const lastMessageRef = useRef(null);
    const [activeBox, setActiveBox ] = useState(false); 


    const handlerActiveBox = () => {
        setActiveBox(!activeBox);
    }
    // Scroll automático al último mensaje
    useEffect(() => {
        if (lastMessageRef.current) {
            const container = chatContainerRef.current;
            const lastMessage = lastMessageRef.current;
            
            // Calcular posición relativa
            const { bottom: messageBottom } = lastMessage.getBoundingClientRect();
            const { bottom: containerBottom } = container.getBoundingClientRect();
            
            // Scroll solo si el mensaje está fuera de vista o cerca del borde
            if (messageBottom > containerBottom - 50) { // 50px de margen
                lastMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "start"
                });
            }
        }
    }, [messages]);

    const handlerMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return (
        <>
            <div className="text_section">
                <div className="d-flex flex-column">
                    {/* ... (switch y título se mantienen igual) ... */}
                    <div className="form-check form-switch d-flex justify-content-center">
                        <input
                            className={`form-check-input ${styles.switch_size}`}
                            type="checkbox"
                            onClick={handlerDarkMode}
                            defaultChecked={darkStatus}
                            />
                    </div>
                    <div className="w-100 my-lg-5 my-4" style={{ display: messages.length ? "none" : "block" }}>
                        <div
                           className={`w-100 d-flex justify-content-center `}

                       >
                         <p className={`h2 ${styles.main_title} text-center m-0`}>
                             ¿Con que puedo ayudarte?                          
                        </p>
                        </div>
                   </div>
                    <div 
                        ref={chatContainerRef}
                        className={`d-flex flex-column gap-3 ${messages.length > 0 ? styles.chatContainer : "" }`}
                    >
                        {messages.map(({ message, isUser }, index) => {
                            const isLastMessage = index === messages.length - 1;
                            return (
                                <div
                                    key={index}
                                    ref={isLastMessage ? lastMessageRef : null}
                                    className={`p-3 rounded-3 ${isUser 
                                        ? "bg-primary text-white align-self-end" 
                                        : "bg-light align-self-start"}`}
                                    style={{ 
                                        maxWidth: "80%",
                                        transition: "transform 0.3s ease",
                                        transform: isLastMessage ? "scale(1)" : "scale(0.98)"
                                    }}
                                >
                                    {isUser ? (
                                        message
                                    ) : (
                                        <ChatBubble content={message} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <BoxMessage show={activeBox} onClose={handlerActiveBox}/> 
                <ViewChat sendMessage={handlerMessage}  activeChatBox={handlerActiveBox} chatInit={messages.length}/>
            </div>
        </>
    );
}

export default OdinIa;