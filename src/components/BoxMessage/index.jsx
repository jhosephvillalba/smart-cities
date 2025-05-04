import React, { useState, useEffect, useRef } from 'react';
import SendIcon from '../../assets/icons/send-icon.svg'; 
import styles from './styles.module.css'; 
import MayorMessageService from '../../services/MayorMessageService';

const intereses = [
  { id: 1, interes: "Comprar un producto" },
  { id: 2, interes: "Solicitar una cotización" },
  { id: 3, interes: "Agendar una reunión" },
  { id: 4, interes: "Conocer más información" },
];

const BoxMessage = ({
  show,
  onClose,
  onMessageSent,
  buttonText = "",
  buttonColor = "",
  buttonIcon = "bi-chat-dots",
  headerTitle = "Asesor de Ventas",
  autoResponse = "Tu solicitud ha sido enviada. Un asesor se comunicará contigo muy pronto.",
  inputPlaceholder = "Escribe aquí tu mensaje...",
  primaryColor = "#0d6efd",
  buttonPosition = "bottom-right"
}) => {
  const [formData, setFormData] = useState({ nombre: '', correo: '', telefono: '', interes: '', mensaje: '' });
  const [messages, setMessages] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    if (!formData.nombre) newErrors.nombre = 'Por favor ingresa tu nombre';
    if (!formData.correo) {
      newErrors.correo = 'Por favor ingresa tu correo';
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      newErrors.correo = 'Por favor ingresa un correo válido';
    }
    if (!formData.telefono) {
      newErrors.telefono = 'Por favor ingresa tu teléfono';
    } else if (!/^\d{7,15}$/.test(formData.telefono)) {
      newErrors.telefono = 'El teléfono debe tener entre 7 y 15 dígitos';
    }
    if (!formData.interes) newErrors.interes = 'Por favor selecciona un interés';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!formSubmitted) {
      if (!validateForm()) return;
      setFormSubmitted(true);
      return;
    }

    if (!formData.mensaje.trim()) {
      setErrors(prev => ({ ...prev, mensaje: 'Por favor escribe un mensaje' }));
      return;
    }

    setIsSubmitting(true);

    try {
      const userMessage = { text: formData.mensaje, isUser: true, timestamp: new Date().toLocaleTimeString() };
      setMessages(prev => [...prev, userMessage]);

      await MayorMessageService.sendMessage({
        nombre: formData.nombre,
        correo: formData.correo,
        telefono: formData.telefono,
        interes: formData.interes,
        mensaje: formData.mensaje
      });

      if (onMessageSent) onMessageSent(formData);

      setTimeout(() => {
        const botResponse = { text: autoResponse, isUser: false, timestamp: new Date().toLocaleTimeString() };
        setMessages(prev => [...prev, botResponse]);
        setFormData(prev => ({ ...prev, mensaje: '' }));
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      console.error('Error al enviar mensaje:', error);
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
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className={`position-fixed ${positions[buttonPosition]} mb-5 me-3`}>
      {show && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className={`modal-content ${styles.modal_content}`}>
              <div className={`modal-header text-white ${styles.header_color}`}>
                <h5 className="modal-title">
                  <i className="bi bi-person-lines-fill me-2"></i> {headerTitle}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
              </div>

              <div className="modal-body" style={{ height: '500px', overflowY: 'auto' }}>
                {/* Formulario de datos del cliente */}
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.nombre} 
                      onChange={handleChange('nombre')}
                      disabled={formSubmitted}
                    />
                    {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      value={formData.correo} 
                      onChange={handleChange('correo')}
                      disabled={formSubmitted}
                    />
                    {errors.correo && <div className="text-danger">{errors.correo}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      value={formData.telefono} 
                      onChange={handleChange('telefono')}
                      disabled={formSubmitted}
                    />
                    {errors.telefono && <div className="text-danger">{errors.telefono}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">¿Está interesado en?</label>
                    <select 
                      className="form-control" 
                      value={formData.interes} 
                      onChange={handleChange('interes')}
                      disabled={formSubmitted}
                    >
                      <option value="">Selecciona una opción</option>
                      {intereses.map(({ id, interes }) => (
                        <option key={id} value={interes}>{interes}</option>
                      ))}
                    </select>
                    {errors.interes && <div className="text-danger">{errors.interes}</div>}
                  </div>
                </form>

                {/* Sección de chat */}
                {formSubmitted && (
                  <div className="mt-4 border-top pt-3">
                    <div className="chat-container">
                      {messages.map((msg, index) => (
                        <div key={index} className={`d-flex ${msg.isUser ? 'justify-content-end' : 'justify-content-start'} mb-3`}>
                          <div className={`p-3 rounded-4 ${msg.isUser ? 'text-white' : 'bg-light'}`} 
                               style={{ maxWidth: '80%', backgroundColor: msg.isUser ? primaryColor : undefined }}>
                            <div>{msg.text}</div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <form onSubmit={handleSend} className="w-100">
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      placeholder={inputPlaceholder}
                      value={formData.mensaje}
                      onChange={handleChange('mensaje')}
                      disabled={isSubmitting}
                    />
                   <button type="submit" className="btn btn-primary-custom d-flex align-items-center" disabled={isSubmitting}>
                        <p className="me-2 mb-0 text-white">Enviar</p>
                     <img src={SendIcon} alt="send" width={20} />
                    </button>
                  </div>
                  {errors.mensaje && <div className="text-danger mt-1">{errors.mensaje}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxMessage;


// import React, { useState, useEffect, useRef } from 'react';
// import SendIcon from '../../assets/icons/send-icon.svg';
// import styles from './styles.module.css';
// import MayorMessageService from '../../services/MayorMessageService';

// const intereses = [
//   { id: 1, interes: "Comprar un producto" },
//   { id: 2, interes: "Solicitar una cotización" },
//   { id: 3, interes: "Agendar una reunión" },
//   { id: 4, interes: "Conocer más información" },
// ];

// const BoxMessage = ({
//   show,
//   onClose,
//   onMessageSent,
//   buttonText = "",
//   buttonColor = "",
//   buttonIcon = "bi-chat-dots",
//   headerTitle = "Asesor de Ventas",
//   autoResponse = "Tu solicitud ha sido enviada. Un asesor se comunicará contigo muy pronto.",
//   inputPlaceholder = "Escribe aquí tu mensaje...",
//   primaryColor = "#0d6efd",
//   buttonPosition = "bottom-right"
// }) => {
//   const [formData, setFormData] = useState({ nombre: '', correo: '', telefono: '', interes: '', mensaje: '' });
//   const [messages, setMessages] = useState([]);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);
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
//     if (!formData.nombre) newErrors.nombre = 'Por favor ingresa tu nombre';
//     if (!formData.correo) {
//       newErrors.correo = 'Por favor ingresa tu correo';
//     } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
//       newErrors.correo = 'Por favor ingresa un correo válido';
//     }
//     if (!formData.telefono) {
//       newErrors.telefono = 'Por favor ingresa tu teléfono';
//     } else if (!/^\d{7,15}$/.test(formData.telefono)) {
//       newErrors.telefono = 'El teléfono debe tener entre 7 y 15 dígitos';
//     }
//     if (!formData.interes) newErrors.interes = 'Por favor selecciona un interés';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (field) => (e) => {
//     const value = e.target.value;
//     setFormData(prev => ({ ...prev, [field]: value }));

//     if (errors[field]) {
//       setErrors(prev => {
//         const newErrors = { ...prev };
//         delete newErrors[field];
//         return newErrors;
//       });
//     }
//   };

//   const handleSend = async (e) => {
//     e.preventDefault();

//     if (!formSubmitted) {
//       if (!validateForm()) return;
//       setFormSubmitted(true);
//       return;
//     }

//     if (!formData.mensaje.trim()) {
//       setErrors(prev => ({ ...prev, mensaje: 'Por favor escribe un mensaje' }));
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const userMessage = {
//         text: formData.mensaje,
//         isUser: true,
//         timestamp: new Date().toLocaleTimeString()
//       };
//       setMessages(prev => [...prev, userMessage]);

//       await MayorMessageService.sendMessage({
//         nombre: formData.nombre,
//         correo: formData.correo,
//         telefono: formData.telefono,
//         interes: formData.interes,
//         mensaje: formData.mensaje
//       });

//       if (onMessageSent) onMessageSent(formData);

//       setTimeout(() => {
//         const botResponse = {
//           text: autoResponse,
//           isUser: false,
//           timestamp: new Date().toLocaleTimeString()
//         };
//         setMessages(prev => [...prev, botResponse]);
//         setFormData(prev => ({ ...prev, mensaje: '' }));
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

//   return (
//     <div className={`position-fixed ${positions[buttonPosition]} mb-5 me-3`}>
//       {show && (
//         <div className="modal fade show d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog modal-dialog-centered">
//             <div className={`modal-content ${styles.modal_content}`}>
//               <div className={`modal-header text-white ${styles.header_color}`}>
//                 <h5 className="modal-title">
//                   <i className="bi bi-person-lines-fill me-2"></i> {headerTitle}
//                 </h5>
//                 <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
//               </div>

//               <div className="modal-body" style={{ height: '500px', overflowY: 'auto' }}>
//                 <form onSubmit={handleSend}>
//                   {!formSubmitted ? (
//                     <>
//                       <div className="mb-3">
//                         <label className="form-label">Nombre</label>
//                         <input type="text" className="form-control" value={formData.nombre} onChange={handleChange('nombre')} />
//                         {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label">Correo</label>
//                         <input type="email" className="form-control" value={formData.correo} onChange={handleChange('correo')} />
//                         {errors.correo && <div className="text-danger">{errors.correo}</div>}
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label">Teléfono</label>
//                         <input type="tel" className="form-control" value={formData.telefono} onChange={handleChange('telefono')} />
//                         {errors.telefono && <div className="text-danger">{errors.telefono}</div>}
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label">¿Está interesado en?</label>
//                         <select className="form-control" value={formData.interes} onChange={handleChange('interes')}>
//                           <option value="">Selecciona una opción</option>
//                           {intereses.map(({ id, interes }) => (
//                             <option key={id} value={interes}>{interes}</option>
//                           ))}
//                         </select>
//                         {errors.interes && <div className="text-danger">{errors.interes}</div>}
//                       </div>
//                       <button type="submit" className="btn btn-primary w-100">Continuar</button>
//                     </>
//                   ) : (
//                     <>
//                       <div className="chat-container mb-3">
//                         {messages.map((msg, index) => (
//                           <div key={index} className={`d-flex ${msg.isUser ? 'justify-content-end' : 'justify-content-start'} mb-2`}>
//                             <div className={`p-2 rounded-3 ${msg.isUser ? 'text-white' : 'bg-light'}`}
//                               style={{ maxWidth: '80%', backgroundColor: msg.isUser ? primaryColor : undefined }}>
//                               {msg.text}
//                             </div>
//                           </div>
//                         ))}
//                         <div ref={messagesEndRef} />
//                       </div>

//                       <div className="input-group">
//                         <textarea
//                           className="form-control"
//                           placeholder={inputPlaceholder}
//                           value={formData.mensaje}
//                           onChange={handleChange('mensaje')}
//                           disabled={isSubmitting}
//                         />
//                         <button type="submit" className="btn btn-primary-custom d-flex align-items-center" disabled={isSubmitting}>
//                           <p className="me-2 mb-0 text-white">Enviar</p>
//                           <img src={SendIcon} alt="send" width={20} />
//                         </button>
//                       </div>
//                       {errors.mensaje && <div className="text-danger mt-1">{errors.mensaje}</div>}
//                     </>
//                   )}
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
