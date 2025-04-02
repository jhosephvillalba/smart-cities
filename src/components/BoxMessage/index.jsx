// import React, { useState, useEffect, useRef } from 'react';

// const BoxMessage = ({
//   show: externalShow,
//   onClose,
//   onMessageSent,
//   buttonText = "",
//   buttonColor = "",
//   buttonIcon = "bi-chat-dots",
//   headerTitle = "Alcaldía de Rionegro",
//   autoResponse = "Tu mensaje ha sido enviado al Alcalde de Rionegro. ¡Gracias por tu comunicación!",
//   inputPlaceholder = "Escribe tu mensaje...",
//   primaryColor = "#0d6efd",
//   buttonPosition = "bottom-right"
// }) => {
//   const [internalShow, setInternalShow] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [messageInput, setMessageInput] = useState('');
//   const messagesEndRef = useRef(null);
//   const isControlled = externalShow !== undefined;

//   const show = isControlled ? externalShow : internalShow;

//   const positions = {
//     'bottom-right': 'bottom-0 end-0',
//     'bottom-left': 'bottom-0 start-0',
//     'top-right': 'top-0 end-0',
//     'top-left': 'top-0 start-0'
//   };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if (!messageInput.trim()) return;

//     const userMessage = {
//       text: messageInput,
//       isUser: true,
//       timestamp: new Date().toLocaleTimeString()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setMessageInput('');

//     if (onMessageSent) {
//       onMessageSent(messageInput);
//     }

//     setTimeout(() => {
//       const botResponse = {
//         text: autoResponse,
//         isUser: false,
//         timestamp: new Date().toLocaleTimeString()
//       };
//       setMessages(prev => [...prev, botResponse]);
//     }, 1000);
//   };

//   const handleToggleChat = () => {
//     if (isControlled) {
//       onClose(!show);
//     } else {
//       setInternalShow(!show);
//     }
//   };

//   const handleClose = () => {
//     if (isControlled) {
//       onClose(false);
//     } else {
//       setInternalShow(false);
//     }
//   };

//   return (
//     <div className={`position-fixed ${positions[buttonPosition]} mb-5 me-3`}>
//       <button 
//         className={`btn btn-${buttonColor} rounded-pill shadow-lg`}
//         onClick={handleToggleChat}
//         style={{ transition: 'all 0.3s ease' }}
//       >
//         <i className={`bi ${buttonIcon} me-2`}></i>
//         {buttonText}
//       </button>

//       {show && (
//         <div className="modal fade show d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div 
//                 className="modal-header text-white"
//                 style={{ backgroundColor: primaryColor }}
//               >
//                 <h5 className="modal-title">
//                   <i className="bi bi-building me-2"></i>
//                   {headerTitle}
//                 </h5>
//                 <button 
//                   type="button" 
//                   className="btn-close btn-close-white"
//                   onClick={handleClose}
//                   aria-label="Cerrar"
//                 ></button>
//               </div>
              
//               <div className="modal-body" style={{ height: '400px' }}>
//                 <div className="chat-container overflow-auto h-100">
//                   {messages.map((msg, index) => (
//                     <div 
//                       key={index}
//                       className={`d-flex ${msg.isUser ? 'justify-content-end' : 'justify-content-start'} mb-3`}
//                     >
//                       <div 
//                         className={`p-3 rounded-4 ${msg.isUser 
//                           ? 'text-white' 
//                           : 'bg-light'}`}
//                         style={{
//                           maxWidth: '80%',
//                           backgroundColor: msg.isUser ? primaryColor : undefined
//                         }}
//                       >
//                         <div className="message-text">{msg.text}</div>
//                         <div className={`text-small ${msg.isUser ? 'text-white-50' : 'text-muted'} mt-1`}>
//                           {msg.timestamp}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                   <div ref={messagesEndRef} />
//                 </div>
//               </div>

//               <div className="modal-footer">
//                 <form onSubmit={handleSendMessage} className="w-100">
//                   <div className="input-group">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder={inputPlaceholder}
//                       value={messageInput}
//                       onChange={(e) => setMessageInput(e.target.value)}
//                       aria-label="Mensaje para el alcalde"
//                     />
//                     <button 
//                       type="submit" 
//                       className="btn"
//                       style={{ backgroundColor: primaryColor, color: 'white' }}
//                       disabled={!messageInput.trim()}
//                     >
//                       <i className="bi bi-send"></i>
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {show && <div className="modal-backdrop fade show"></div>}
//     </div>
//   );
// };


// export default BoxMessage;

const barrios = [
  { "id": 1, "barrio": "Belchite" },
  { "id": 2, "barrio": "Centro" },
  { "id": 3, "barrio": "Alto del Medio" },
  { "id": 4, "barrio": "Hospital" },
  { "id": 5, "barrio": "Fontibón" },
  { "id": 6, "barrio": "El Faro" },
  { "id": 7, "barrio": "San Antonio" },
  { "id": 8, "barrio": "Gualanday" },
  { "id": 9, "barrio": "La María" },
  { "id": 10, "barrio": "Cuatro Esquinas" },
  { "id": 11, "barrio": "Santa Ana" },
  { "id": 12, "barrio": "San Joaquín" },
  { "id": 13, "barrio": "El Porvenir" },
  { "id": 14, "barrio": "Barro Blanco" },
  { "id": 15, "barrio": "El Carretero" }
]

const categorias = [
  { "id": 1, "categoria": "Seguridad y Convivencia Ciudadana" },
  { "id": 2, "categoria": "Movilidad y Transporte" },
  { "id": 3, "categoria": "Infraestructura y Obras Públicas" },
  { "id": 4, "categoria": "Salud y Bienestar" },
  { "id": 5, "categoria": "Educación y Cultura" },
  { "id": 6, "categoria": "Servicios Públicos y Saneamiento" },
  { "id": 7, "categoria": "Medio Ambiente y Espacios Públicos" },
  { "id": 8, "categoria": "Transparencia y Corrupción" },
  { "id": 9, "categoria": "Atención a la Comunidad y Participación Ciudadana" },
  { "id": 10, "categoria": "Emergencias y Desastres Naturales" }
]




import React, { useState, useEffect, useRef } from 'react';

const BoxMessage = ({
  show: externalShow,
  onClose,
  onMessageSent,
  buttonText = "Abrir Chat",
  buttonColor = "primary",
  buttonIcon = "bi-chat-dots",
  headerTitle = "Alcaldía de Rionegro",
  autoResponse = "Tu mensaje ha sido enviado al Alcalde de Rionegro. ¡Gracias por tu comunicación!",
  inputPlaceholder = "Escribe tu mensaje...",
  primaryColor = "#0d6efd",
  buttonPosition = "bottom-right"
}) => {
  const [internalShow, setInternalShow] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({ barrio: '', sexo: '', edad: '', categoria: '' });
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const userMessage = { text: messageInput, isUser: true, timestamp: new Date().toLocaleTimeString() };
    setMessages(prev => [...prev, userMessage]);
    setMessageInput('');

    if (onMessageSent) onMessageSent(messageInput);

    setTimeout(() => {
      const botResponse = { text: autoResponse, isUser: false, timestamp: new Date().toLocaleTimeString() };
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.barrio || !formData.edad || !formData.categoria) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }
    setShowForm(false);
  };

  return (
    <div className={`position-fixed ${positions[buttonPosition]} mb-5 me-3`}>
      <button className={`btn btn-${buttonColor} rounded-pill shadow-lg`} onClick={handleToggleChat}>
        <i className={`bi ${buttonIcon} me-2`}></i>
        {buttonText}
      </button>

      {show && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header text-white" style={{ backgroundColor: primaryColor }}>
                <h5 className="modal-title">
                  <i className="bi bi-building me-2"></i>
                  {headerTitle}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={handleClose} aria-label="Cerrar"></button>
              </div>

              {showForm ? (
                <div className="modal-body">
                  <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Barrio *</label>
                      <select className="form-control" value={formData.barrio} onChange={(e) => setFormData({ ...formData, barrio: e.target.value })}>
                        <option value="">Selecciona tu barrio</option>
                        {
                          barrios.map(({id, barrio})=> (<option key={id} value={barrio}>{barrio}</option>))
                        }
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Sexo</label>
                      <select className="form-control" value={formData.sexo} onChange={(e) => setFormData({ ...formData, sexo: e.target.value })}>
                        <option value="">Prefiero no decirlo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Edad *</label>
                      <input type="number" className="form-control" value={formData.edad} onChange={(e) => setFormData({ ...formData, edad: e.target.value })} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Categoría *</label>
                      <select className="form-control" value={formData.categoria} onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}>
                        <option value="">Selecciona una categoría</option>
                        {
                          categorias.map(({id, categoria})=> (<option key={id} value={categoria}>{categoria}</option>))
                        }
                      </select>
                    </div>
                    <button type="submit" className="btn btn-success w-100">Continuar al Chat</button>
                  </form>
                </div>
              ) : (
                <>
                  <div className="modal-body" style={{ height: '400px' }}>
                    <div className="chat-container overflow-auto h-100">
                      {messages.map((msg, index) => (
                        <div key={index} className={`d-flex ${msg.isUser ? 'justify-content-end' : 'justify-content-start'} mb-3`}>
                          <div className={`p-3 rounded-4 ${msg.isUser ? 'text-white' : 'bg-light'}`} style={{ maxWidth: '80%', backgroundColor: msg.isUser ? primaryColor : undefined }}>
                            <div className="message-text">{msg.text}</div>
                            <div className={`text-small ${msg.isUser ? 'text-white-50' : 'text-muted'} mt-1`}>{msg.timestamp}</div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <form onSubmit={handleSendMessage} className="w-100">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder={inputPlaceholder} value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
                        <button type="submit" className="btn" style={{ backgroundColor: primaryColor, color: 'white' }} disabled={!messageInput.trim()}>
                          <i className="bi bi-send"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxMessage;

