
// import React, { useState, useEffect, useRef } from 'react';
// import SendIcon from '../../assets/icons/send-icon.svg'; 
// import styles from './styles.module.css'; 
// import MayorMessageService from '../../services/MayorMessageService';

// const barrios = [
//   { id: 1, barrio: "Belchite" }, { id: 2, barrio: "Centro" }, { id: 3, barrio: "Alto del Medio" },
//   { id: 4, barrio: "Hospital" }, { id: 5, barrio: "Fontibón" }, { id: 6, barrio: "El Faro" },
//   { id: 7, barrio: "San Antonio" }, { id: 8, barrio: "Gualanday" }, { id: 9, barrio: "La María" },
//   { id: 10, barrio: "Cuatro Esquinas" }
// ];

// const categorias = [
//   { id: 1, categoria: "Seguridad y Convivencia Ciudadana" }, { id: 2, categoria: "Movilidad y Transporte" },
//   { id: 3, categoria: "Infraestructura y Obras Públicas" }, { id: 4, categoria: "Salud y Bienestar" },
//   { id: 5, categoria: "Educación y Cultura" }, { id: 6, categoria: "Servicios Públicos y Saneamiento" }
// ];

// const BoxMessage = ({
//   show,
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
//   const [formData, setFormData] = useState({ barrio: '', sexo: '', edad: '', categoria: '', mensaje: '' });
//   const [messages, setMessages] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [step, setStep] = useState('form'); // 'form', 'chat', 'success'
//   const messagesEndRef = useRef(null);

//   const positions = {
//     'bottom-right': 'bottom-0 end-0',
//     'bottom-left': 'bottom-0 start-0',
//     'top-right': 'top-0 end-0',
//     'top-left': 'top-0 start-0'
//   };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.barrio) newErrors.barrio = 'Por favor selecciona tu barrio';
//     if (!formData.categoria) newErrors.categoria = 'Por favor selecciona una categoría';
//     if (formData.edad && (isNaN(formData.edad) || formData.edad < 0 || formData.edad > 120)) {
//       newErrors.edad = 'Por favor ingresa una edad válida (0-120)';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();

//     if (step === 'form') {
//       if (validateForm()) {
//         setStep('chat');
//       }
//       return;
//     }

//     if (!formData.mensaje.trim()) {
//       setErrors(prev => ({ ...prev, mensaje: 'Por favor escribe un mensaje' }));
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const userMessage = { text: formData.mensaje, isUser: true, timestamp: new Date().toLocaleTimeString() };
//       setMessages(prev => [...prev, userMessage]);

//       await MayorMessageService.sendMessage({
//         barrio: formData.barrio,
//         sexo: formData.sexo,
//         edad: formData.edad,
//         categoria: formData.categoria,
//         mensaje: formData.mensaje
//       });

//       if (onMessageSent) onMessageSent(formData);

//       setTimeout(() => {
//         const botResponse = { text: autoResponse, isUser: false, timestamp: new Date().toLocaleTimeString() };
//         setMessages(prev => [...prev, botResponse]);
//         setFormData(prev => ({ ...prev, mensaje: '' }));
//         setStep('success');
//         setIsSubmitting(false);
//       }, 1000);

//     } catch (error) {
//       console.error('Error al enviar mensaje:', error);
//       const errorMessage = {
//         text: "Lo sentimos, ha ocurrido un error al enviar tu mensaje. Por favor intenta de nuevo.",
//         isUser: false,
//         timestamp: new Date().toLocaleTimeString(),
//         isError: true
//       };
//       setMessages(prev => [...prev, errorMessage]);
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (field) => (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: e.target.value
//     }));
//     if (errors[field]) {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[field];
//         return newErrors;
//       });
//     }
//   };

//   return (
//     <div className={`position-fixed ${positions[buttonPosition]} mb-5 me-3`}>
//       {show && (
//         <div className="modal fade show d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className={`modal-header text-white ${styles.header_color}`}>
//                 <h5 className="modal-title">
//                   <i className="bi bi-building me-2"></i> {headerTitle}
//                 </h5>
//                 <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
//               </div>

//               <div className="modal-body" style={{ height: '400px', overflowY: 'auto' }}>
//                 {step === 'form' && (
//                   <form>
//                     <div className="mb-3">
//                       <label className="form-label">Barrio</label>
//                       <select className="form-control" value={formData.barrio} onChange={handleChange('barrio')}>
//                         <option value="">Selecciona tu barrio</option>
//                         {barrios.map(({ id, barrio }) => (
//                           <option key={id} value={barrio}>{barrio}</option>
//                         ))}
//                       </select>
//                       {errors.barrio && <div className="text-danger">{errors.barrio}</div>}
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Sexo</label>
//                       <select className="form-control" value={formData.sexo} onChange={handleChange('sexo')}>
//                         <option value="">Selecciona</option>
//                         <option value="Femenino">Femenino</option>
//                         <option value="Masculino">Masculino</option>
//                         <option value="Otro">Otro</option>
//                       </select>
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Edad</label>
//                       <input type="number" className="form-control" value={formData.edad} onChange={handleChange('edad')} />
//                       {errors.edad && <div className="text-danger">{errors.edad}</div>}
//                     </div>
//                     <div className="mb-3">
//                       <label className="form-label">Categoría</label>
//                       <select className="form-control" value={formData.categoria} onChange={handleChange('categoria')}>
//                         <option value="">Selecciona una categoría</option>
//                         {categorias.map(({ id, categoria }) => (
//                           <option key={id} value={categoria}>{categoria}</option>
//                         ))}
//                       </select>
//                       {errors.categoria && <div className="text-danger">{errors.categoria}</div>}
//                     </div>
//                   </form>
//                 )}

//                 {step === 'chat' && (
//                   <div className="chat-container">
//                     {messages.map((msg, index) => (
//                       <div key={index} className={`d-flex ${msg.isUser ? 'justify-content-end' : 'justify-content-start'} mb-3`}>
//                         <div className={`p-3 rounded-4 ${msg.isUser ? 'text-white' : 'bg-light'}`} style={{ maxWidth: '80%', backgroundColor: msg.isUser ? primaryColor : undefined }}>
//                           <div>{msg.text}</div>
//                         </div>
//                       </div>
//                     ))}
//                     <div ref={messagesEndRef} />
//                   </div>
//                 )}
//               </div>

//               <div className="modal-footer">
//                 <form onSubmit={handleSendMessage} className="w-100">
//                   {step !== 'form' && (
//                     <div className="input-group">
//                       <textarea
//                         className="form-control"
//                         placeholder={inputPlaceholder}
//                         value={formData.mensaje}
//                         onChange={handleChange('mensaje')}
//                         disabled={isSubmitting}
//                       />
//                       <button type="submit" className="btn btn-primary d-flex align-items-center" disabled={isSubmitting}>
//                         <span className="me-2 text-black">Enviar</span>
//                         <img src={SendIcon} alt="send" width={20} />
//                       </button>
//                     </div>
//                   )}
//                   {errors.mensaje && <div className="text-danger mt-1">{errors.mensaje}</div>}
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BoxMessage;

import React, { useState, useEffect, useRef } from 'react';
import SendIcon from '../../assets/icons/send-icon.svg'; 
import styles from './styles.module.css'; 
import MayorMessageService from '../../services/MayorMessageService';
import SmartCities from "../../assets/icons/smart-cities.svg";

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
  { "id": 10, "barrio": "Cuatro Esquinas" }
];

const categorias = [
  { "id": 1, "categoria": "Seguridad y Convivencia Ciudadana" },
  { "id": 2, "categoria": "Movilidad y Transporte" },
  { "id": 3, "categoria": "Infraestructura y Obras Públicas" },
  { "id": 4, "categoria": "Salud y Bienestar" },
  { "id": 5, "categoria": "Educación y Cultura" },
  { "id": 6, "categoria": "Servicios Públicos y Saneamiento" }
];

const BoxMessage = ({
  show,
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
  const [formData, setFormData] = useState({ 
    barrio: '', 
    sexo: '', 
    edad: '', 
    categoria: '', 
    mensaje: '' 
  });
  const [messages, setMessages] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState('form'); // 'form', 'chat', 'success'
  const messagesEndRef = useRef(null);

  const positions = {
    'bottom-right': 'bottom-0 end-0',
    'bottom-left': 'bottom-0 start-0',
    'top-right': 'top-0 end-0',
    'top-left': 'top-0 start-0'
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.barrio) newErrors.barrio = 'Por favor selecciona tu barrio';
    if (!formData.categoria) newErrors.categoria = 'Por favor selecciona una categoría';
    if (formData.edad && (isNaN(formData.edad) || formData.edad < 0 || formData.edad > 120)) {
      newErrors.edad = 'Por favor ingresa una edad válida (0-120)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    // Si estamos en el paso del formulario, validamos y pasamos al chat
    if (step === 'form') {
      if (validateForm()) {
        setStep('chat');
        return;
      } else {
        return;
      }
    }
    
    // Si estamos en el paso del chat
    if (!formData.mensaje || !formData.mensaje.trim()) {
      setErrors(prev => ({ ...prev, mensaje: 'Por favor escribe un mensaje' }));
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Añadir el mensaje a la conversación
      const userMessage = { 
        text: formData.mensaje, 
        isUser: true, 
        timestamp: new Date().toLocaleTimeString() 
      };
      setMessages(prev => [...prev, userMessage]);
      
      // Enviar al backend
      await MayorMessageService.sendMessage({
        barrio: formData.barrio,
        sexo: formData.sexo,
        edad: formData.edad,
        categoria: formData.categoria,
        mensaje: formData.mensaje
      });
      
      if (onMessageSent) onMessageSent(formData);
      
      // Mostrar respuesta automática
      setTimeout(() => {
        const botResponse = { 
          text: autoResponse, 
          isUser: false, 
          timestamp: new Date().toLocaleTimeString() 
        };
        setMessages(prev => [...prev, botResponse]);
        setFormData(prev => ({ ...prev, mensaje: '' }));
        setStep('success');
        setIsSubmitting(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      
      // Mostrar error
      const errorMessage = { 
        text: "Lo sentimos, ha ocurrido un error al enviar tu mensaje. Por favor intenta de nuevo.", 
        isUser: false, 
        timestamp: new Date().toLocaleTimeString(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsSubmitting(false);
    }
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };
  
  const resetForm = () => {
    setFormData({ barrio: '', sexo: '', edad: '', categoria: '', mensaje: '' });
    setMessages([]);
    setErrors({});
    setStep('form');
  };

  return (
    <div className={`position-fixed ${positions[buttonPosition]} mb-5 me-3`}>
      <button className={`btn btn-${buttonColor} rounded-pill shadow-lg`} onClick={onClose} style={{visibility:"hidden"}}>
        <i className={`bi ${buttonIcon} me-2`}></i>
        {buttonText}
      </button>

      {show && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className={`modal-header text-white ${styles.header_color}`}>
                <h5 className="modal-title">
                  <i className="bi bi-building me-2"></i>
                  {headerTitle}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Cerrar"></button>
              </div>
              
              <div className="modal-body" style={{ height: '400px', overflowY: 'auto' }}>
                {/* Formulario - Paso 1 */}
                {step === 'form' && (
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Barrio</label>
                      <select 
                        className={`form-control ${errors.barrio ? 'is-invalid' : ''}`}
                        value={formData.barrio} 
                        onChange={handleChange('barrio')}
                      >
                        <option value="">Selecciona tu barrio</option>
                        {barrios.map(({ id, barrio }) => (
                          <option key={id} value={barrio}>{barrio}</option>
                        ))}
                      </select>
                      {errors.barrio && <div className="invalid-feedback">{errors.barrio}</div>}
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Sexo</label>
                      <select 
                        className="form-control" 
                        value={formData.sexo} 
                        onChange={handleChange('sexo')}
                      >
                        <option value="">Selecciona</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Edad</label>
                      <input 
                        type="number" 
                        className={`form-control ${errors.edad ? 'is-invalid' : ''}`}
                        value={formData.edad} 
                        onChange={handleChange('edad')} 
                      />
                      {errors.edad && <div className="invalid-feedback">{errors.edad}</div>}
                    </div>
                    
                    <div className="mb-3">
                      <label className="form-label">Categoría</label>
                      <select 
                        className={`form-control ${errors.categoria ? 'is-invalid' : ''}`}
                        value={formData.categoria} 
                        onChange={handleChange('categoria')}
                      >
                        <option value="">Selecciona una categoría</option>
                        {categorias.map(({ id, categoria }) => (
                          <option key={id} value={categoria}>{categoria}</option>
                        ))}
                      </select>
                      {errors.categoria && <div className="invalid-feedback">{errors.categoria}</div>}
                    </div>
                  </form>
                )}
                
                {/* Chat - Paso 2 o 3 */}
                {(step === 'chat' || step === 'success') && (
                  <div className="chat-container mt-3">
                    {step === 'chat' && (
                      <div className="alert alert-info">
                        <strong>Información completada!</strong> Ahora puedes escribir tu mensaje al Alcalde.
                      </div>
                    )}
                    
                    {messages.map((msg, index) => (
                      <div key={index} className={`d-flex ${msg.isUser ? 'justify-content-end' : 'justify-content-start'} mb-3`}>
                        <div 
                          className={`p-3 rounded-4 ${msg.isUser ? 'text-white' : 'bg-light'} ${msg.isError ? 'text-white bg-danger' : ''}`} 
                          style={{ maxWidth: '80%', backgroundColor: msg.isUser ? primaryColor : undefined }}
                        >
                          <div className="message-text">{msg.text}</div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                    
                    {step === 'success' && (
                      <div className="text-center mt-4">
                        <button 
                          className="btn btn-outline-primary" 
                          onClick={resetForm}
                        >
                          Enviar otro mensaje
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Footer con campo de mensaje solo visible en el paso 2 */}
              {step === 'chat' && (
                <div className="modal-footer">
                  <form onSubmit={handleSendMessage} className="w-100">
                    <div className="input-group">
                      <textarea 
                        className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                        placeholder={inputPlaceholder}
                        value={formData.mensaje}
                        onChange={handleChange('mensaje')}
                        disabled={isSubmitting}
                      />
                      <button 
                        type="submit" 
                        className="btn btn-primary d-flex justify-content-center align-items-center gap-2"
                        disabled={isSubmitting}
                      >
                        <p className='m-0 text-black'>
                          {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </p>
                        <img src={SendIcon} alt="send" width={20}/>
                      </button>
                    </div>
                    {errors.mensaje && <div className="text-danger mt-1">{errors.mensaje}</div>}
                  </form>
                </div>
              )}
              
              {/* Footer con botón para continuar en el paso 1 */}
              {step === 'form' && (
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-primary d-flex justify-content-center align-items-center gap-2 w-100"
                    onClick={handleSendMessage}
                  >
                    <span>Continuar</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* <div className="d-flex justify-content-center w-100 my-lg-1 my-3 justify-content-lg-end p-2">
        <a href="https://eso.gov.co/" target='_blank' rel="noopener noreferrer">
          <img src={SmartCities} width={150} alt="smart-cities" />
        </a>
      </div> */}
    </div>
  );
};

export default BoxMessage;


