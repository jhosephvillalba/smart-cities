import React, { useState } from "react";
import Styles from "./styles.module.css";
import ChatForm from "../ChatForm";

function ChatContent() {
    const [messages, setMessages] = useState([]);

    function handlerMessage(message) {
        setMessages([...messages, message]);
    }

    return (
        <>
            <div className={`d-flex flex-column w-100 align-items-between my-5 ${Styles.chat_container}`}>
                <div 
                    className={`d-flex justify-content-center ${messages.length === 0 ? Styles.title_visibility : Styles.title_hidden }`}   
                >
                    <p className="h2 main_title">¿Con qué puedo ayudarte?</p>
                </div>
                <div className="w-100 d-flex flex-column">
                    {messages.map(({ message, date }, index) => (
                        <div key={index}>{`${index}. ${message}`}</div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <ChatForm sendMessage={handlerMessage} />
            </div>
        </>
    );
}

export default ChatContent;
