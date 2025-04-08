// import React, { useState } from "react";
// import styles from "./styles.module.css";
// import BoxMessage from "../BoxMessage";

// import IconLoupe from "../../assets/icons/loupe-smart.svg";

// import IconUpload from "../../assets/icons/upload-smart.svg";
// import IconFocus from "../../assets/icons/focus-smart.svg";
// import IconProcess from "../../assets/icons/icon-process.svg";

// import IconBook from "../../assets/icons/icon-book.svg";
// import IconNotas from "../../assets/icons/icon-note.svg";
// import IconStar from "../../assets/icons/flash-star.svg";
// import IconImg from "../../assets/icons/icon-img.svg";
// import IconMore from "../../assets/icons/icon-more.svg";
// import MoreServices from "../../assets/icons/+smart.svg";
// import SmartCities from "../../assets/icons/smart-cities.svg"; 


// import axios from "axios";
// import { useNavigate} from "react-router-dom";




// const ViewChat = ({ sendMessage, chatInit, activeChatBox }) => {

//   const [input, setInput] = useState(""); // Estado para el mensaje del usuario
//   const [isLoading, setIsLoading] = useState(false); // Estado para carga
//   const navigate = useNavigate();
  
//     const handleLogin = () => {
//       // Lógica de autenticación...
//       navigate('/help');
//     };

//   const handlerInput = (e) => setInput(e.target.value)

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userMessage = input; // Guardar el mensaje antes de limpiar
//     setInput("");
//     setIsLoading(true);
//     sendMessage({ message: userMessage, isUser: true });

//     try {
//       const response = await axios.post("http://ec2-54-166-74-32.compute-1.amazonaws.com:8000/chat/", {
//         message: userMessage,
//       });

//       const botReply = response.data.choices[0].message.content;
//       // console.log({ response })
//       sendMessage({ message: botReply, isUser: false });

//     } catch (error) {
//       console.error("Error al llamar a la API:", error);
//       sendMessage({
//         message: "❌ Error al obtener respuesta",
//         isUser: false
//       });
//       setInput(userMessage); // Recuperar el mensaje en caso de error
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSubmit(e);
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-column align-items-center mt-2">
//         <div className="d-flex flex-column align-items-center w-100" style={{ maxWidth: "830px" }}>

//           <div className="d-lg-none w-100">
//           {/* <div style={{ display: chatInit > 0 ? "block" : "none" }}> */}
//             <div
//               className="d-flex justify-content-start align-items-center mt-lg-4 mb-lg-4 mb-3 mt-3 w-100"
//               style={{ maxWidth: "1200px" }}
//             >
//               <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-center w-100">
//                 <button
//                   className="btn btn-info d-flex justify-content-center align-items-center"
//                   data-bs-toggle="modal"
//                   data-bs-target="#about"
//                   onClick={activeChatBox}
//                 >
//                   <img src={IconBook} alt="ear" width={13} />
//                     <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
//                       Mensaje al Alcalde
//                     </span>
//                 </button>

//                 {/* <div className="dropdown">
//                   <button className="btn btn-info justify-content-center align-items-center custom-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     <img src={IconMore} alt="ear" width={13} />
//                     <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
//                       Más
//                     </span>
//                   </button>
//                   <ul className="dropdown-menu p-4">

//                      <li className="my-2">
//                       <a className="d-flex justify-content-start gap-3 text-decoration-none">
//                         <img src={IconNotas} alt="ear" width={13} />
//                         <span className={`${styles.font_family_text_btn} ms-1`}>
//                           Envia al alcande
//                         </span>
//                       </a>
//                     </li>  

//                     <li className="my-2">
//                       <a className="d-flex justify-content-start gap-3 text-decoration-none">
//                         <img src={IconImg} alt="ear" width={13} />
//                         <span className={`${styles.font_family_text_btn} ms-1`}>
//                           Analisis de imagenes
//                         </span>
//                       </a>
//                     </li>


//                     <li className="my-2">
//                       <a className="d-flex justify-content-start gap-3 text-decoration-none">
//                         <img src={IconStar} alt="ear" width={13} />
//                         <span className={`${styles.font_family_text_btn} ms-1`}>
//                           Sorpréndeme
//                         </span>
//                       </a>
//                     </li>

//                   </ul>
//                 </div>  */}

//               </div>
//             </div>
//           </div>

//           {/* ------------------------caja de chat---------------------------*/}
//           <form onSubmit={handleSubmit} className={`w-100 ${styles.container_chat_text} position_text_input`}>
//             <textarea
//               value={input}
//               placeholder="Envia un mensaje a OdinIA"
//               style={{ width: "100%", minHeight: chatInit > 0 ? "60px" : "100px" }}
//               className={`${styles.input_text} input_text_bg_dark ${styles.font_family}`}
//               onChange={handlerInput}
//               onKeyDown={handleKeyPress}
//             ></textarea>

//             <div
//               className={`w-100 d-flex ${styles.container_chat_buttons}  justify-content-between`}
//             >
//               <div className="d-none  d-lg-block">
//                 <div className="d-flex flex-row gap-3">

//                   <button type="submit" className="btn btn-primary d-flex justify-content-center align-items-center">
//                     {
//                       isLoading ? (<div className="spinner-border spinner-border-sm" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                       </div>) : (<img src={IconLoupe} alt="search" width={14} />)
//                     }
//                     <span className={`${styles.font_family_text_btn} ms-2`}>Buscar</span>
//                   </button>

//                   <button className="btn btn-primary d-flex justify-content-center align-items-center">
//                     <img src={IconUpload} alt="upload" width={14} />
//                     <span className={`${styles.font_family_text_btn} ms-3`}>Adjuntar</span>
//                   </button>
//                   <button className="btn btn-primary d-flex  justify-content-center align-items-center">
//                     <img src={IconFocus} alt="upload" width={14} />
//                     <span className={`${styles.font_family_text_btn} ms-3`}>Analiza</span>
//                   </button>

//                   {/* deplehable con la opciones */}

//                 </div>
//               </div>

//               {/* ----------------------------dropdown---------------------------- */}
//               <div className="d-lg-none">
//                 <div className="d-flex gap-3">

//                   <button type="submit" className="btn btn-primary d-flex justify-content-center align-items-center">
//                     {
//                       isLoading ? (<div className="spinner-border spinner-border-sm" role="status">
//                         <span className="visually-hidden">Loading...</span>
//                       </div>) : (<img src={IconLoupe} alt="search" width={14} />)
//                     }
//                     <span className={`${styles.font_family_text_btn} ms-2`}>Buscar</span>
//                   </button>

//                   <div className="dropdown">
//                     <button className="btn btn-primary custom-dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                       <img src={MoreServices} alt="more services" />
//                     </button>
//                     <ul className="dropdown-menu p-4">
//                       <li className="my-2">
//                         <a className="d-flex justify-content-start gap-3 text-decoration-none">
//                           <img src={IconUpload} alt="upload" />
//                           <span className={`${styles.font_family_text_btn}`}>Adjuntar</span>
//                         </a>
//                       </li>
//                       {/* <li className="my-2">
//                         <a className="d-flex justify-content-start gap-3 text-decoration-none">
//                           <img src={IconLoupe} alt="search" />
//                           <span className={`${styles.font_family_text_btn}`}>Buscar</span>
//                         </a>
//                       </li> */}
//                       <li className="my-2">
//                         <a className="d-flex justify-content-start gap-3 text-decoration-none">
//                           <img src={IconFocus} alt="upload" />
//                           <span className={`${styles.font_family_text_btn}`}>Analiza</span>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>

//                 </div>
//               </div>
//               {/* ----------------------------dropdown---------------------------- */}

//               <div className="d-flex flex-row gap-3">
//                 <button className="btn btn-secondary d-flex justify-content-center align-items-center">
//                   <img src={IconProcess} alt="ear" width={13} />
//                   <span className={`text-white ${styles.font_family_text_btn} ms-3`}>
//                     Voice
//                   </span>
//                 </button>
//               </div>
//             </div>

//           </form>
//           {/* ------------------------caja de chat---------------------------*/}

//           {/* --------------------------caja botones------------------------- */}
//           <div style={{ display: chatInit > 0 ? "none" : "block" }}>
//             <div className="d-none d-lg-block">
//               <div
//                 className="d-flex justify-content-lg-center justify-content-md-end align-items-center mt-lg-4 mb-lg-4 mb-3 mt-3 w-100"
//                 style={{ maxWidth: "1200px" }}
//               >
//                 <div className="d-flex gap-3 justify-content-start justify-content-lg-center w-100">
//                   <button
//                     className="btn btn-info d-flex justify-content-center align-items-center"
//                     data-bs-toggle="modal"
//                     data-bs-target="#about"
//                     onClick={activeChatBox}
//                   >
//                     <img src={IconBook} alt="ear" width={13} />
//                     <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
//                       Mensaje al Alcalde
//                     </span>
//                   </button>
//                   <button onClick={handleLogin}
//                     className="btn btn-info d-flex justify-content-center align-items-center"
//                     data-bs-toggle="modal"
//                     data-bs-target="#helpWriter"
//                   >
//                     {/* <img src={IconNotas} alt="ear" width={13} /> */}
//                     <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
//                       Preguntas frecuentes
//                     </span>
//                   </button>

//                   {/* <button className="btn btn-info d-flex justify-content-center align-items-center">
//                     <img src={IconStar} alt="ear" width={13} />
//                     <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
//                       Sorpréndeme
//                     </span>
//                   </button>
//                   <button className="btn btn-info d-flex justify-content-center align-items-center">
//                     <img src={IconImg} alt="ear" width={13} />
//                     <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
//                       Analisis de imagenes
//                     </span>
//                   </button>
//                   <button className="btn btn-info d-flex justify-content-center align-items-center">
//                     <img src={IconMore} alt="ear" width={13} />
//                     <span className={`text-white ${styles.font_family_text_btn} ms-1`}>
//                       Más
//                     </span>
//                   </button> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div style={{ display: chatInit > 0 ? "none" : "block" }} className="w-100">
//           <div className="d-flex justify-content-center px-5 w-100 my-lg-1 my-3 justify-content-lg-end">
//             <a href="https://eso.gov.co/" target='_blank'>
//               <img src={SmartCities} width={150} alt="smart-cities" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/*-------------------- Modal-1--------------------------*/}
//       <div
//         className="modal fade modal-dialog-scrollable"
//         id="about"
//         data-bs-backdrop="false"
//         data-bs-keyboard="false"
//         tabIndex="-1"
//         aria-labelledby="staticBackdropLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-body">
//               <BoxMessage show={true} />
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ViewChat; 



import React, { useState } from "react";
import styles from "./styles.module.css";
import BoxMessage from "../BoxMessage";

import IconLoupe from "../../assets/icons/loupe-smart.svg";
import IconUpload from "../../assets/icons/upload-smart.svg";
import IconFocus from "../../assets/icons/focus-smart.svg";
import IconProcess from "../../assets/icons/icon-process.svg";

import IconBook from "../../assets/icons/icon-book.svg";
import IconNotas from "../../assets/icons/icon-note.svg";
import IconStar from "../../assets/icons/flash-star.svg";
import IconImg from "../../assets/icons/icon-img.svg";
import IconMore from "../../assets/icons/icon-more.svg";
import MoreServices from "../../assets/icons/+smart.svg";
import SmartCities from "../../assets/icons/smart-cities.svg";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewChat = ({ sendMessage, chatInit, activeChatBox }) => {
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
      const response = await axios.post("http://ec2-54-166-74-32.compute-1.amazonaws.com:8000/chat/", {
        message: userMessage,
      });

      const botReply = response.data.choices[0].message.content;
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
                    Mensaje al Alcalde
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
                      Mensaje al Alcalde
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
                    <span className={`${styles.font_family_text_btn} ms-3`}>Adjuntar</span>
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
                      Mensaje al Alcalde
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
            <a href="https://eso.gov.co/" target='_blank' rel="noopener noreferrer">
              <img src={SmartCities} width={150} alt="smart-cities" />
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
