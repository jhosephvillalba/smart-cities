import React, { useState, useEffect, useRef } from 'react';

const BoxMessage = ({
  show: externalShow,
  onClose,
  onMessageSent,
  buttonText = "",
  buttonColor = "",
  buttonIcon = "bi-chat-dots",
  headerTitle = "Alcaldía de Rionegro",
  autoResponse = "Tu mensaje ha sido enviado al Alcalde de Rionegro. ¡Gracias por tu comunicación!",
  inputPlaceholder = "Escribe tu mensaje...",
  primaryColor = "#0d6efd",
  buttonPosition = "bottom-right"
}) => {
  const [internalShow, setInternalShow] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const messagesEndRef = useRef(null);
  const isControlled = externalShow !== undefined;

  const show = isControlled ? externalShow : internalShow;

  const positions = {
    'bottom-right': 'bottom-0 end-0',
    'bottom-left': 'bottom-0 start-0',
    'top-right': 'top-0 end-0',
    'top-left': 'top-0 start-0'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const userMessage = {
      text: messageInput,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessageInput('');

    if (onMessageSent) {
      onMessageSent(messageInput);
    }

    setTimeout(() => {
      const botResponse = {
        text: autoResponse,
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleToggleChat = () => {
    if (isControlled) {
      onClose(!show);
    } else {
      setInternalShow(!show);
    }
  };

  const handleClose = () => {
    if (isControlled) {
      onClose(false);
    } else {
      setInternalShow(false);
    }
  };

  return (
    <div className={`position-fixed ${positions[buttonPosition]} mb-5 me-3`}>
      <button 
        className={`btn btn-${buttonColor} rounded-pill shadow-lg`}
        onClick={handleToggleChat}
        style={{ transition: 'all 0.3s ease' }}
      >
        <i className={`bi ${buttonIcon} me-2`}></i>
        {buttonText}
      </button>

      {show && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div 
                className="modal-header text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <h5 className="modal-title">
                  <i className="bi bi-building me-2"></i>
                  {headerTitle}
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white"
                  onClick={handleClose}
                  aria-label="Cerrar"
                ></button>
              </div>
              
              <div className="modal-body" style={{ height: '400px' }}>
                <div className="chat-container overflow-auto h-100">
                  {messages.map((msg, index) => (
                    <div 
                      key={index}
                      className={`d-flex ${msg.isUser ? 'justify-content-end' : 'justify-content-start'} mb-3`}
                    >
                      <div 
                        className={`p-3 rounded-4 ${msg.isUser 
                          ? 'text-white' 
                          : 'bg-light'}`}
                        style={{
                          maxWidth: '80%',
                          backgroundColor: msg.isUser ? primaryColor : undefined
                        }}
                      >
                        <div className="message-text">{msg.text}</div>
                        <div className={`text-small ${msg.isUser ? 'text-white-50' : 'text-muted'} mt-1`}>
                          {msg.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="modal-footer">
                <form onSubmit={handleSendMessage} className="w-100">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={inputPlaceholder}
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      aria-label="Mensaje para el alcalde"
                    />
                    <button 
                      type="submit" 
                      className="btn"
                      style={{ backgroundColor: primaryColor, color: 'white' }}
                      disabled={!messageInput.trim()}
                    >
                      <i className="bi bi-send"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {show && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};


export default BoxMessage;