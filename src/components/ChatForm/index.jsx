// import React from "react";
// import styles from "./styles.module.css";
// import IconLoupe from "../../assets/icons/smart-loupe.svg";
// import IconUpload from "../../assets/icons/smart-download.svg";
// import IconFocus from "../../assets/icons/smart-focus.svg";
// import IconProcess from "../../assets/icons/icon-process.svg";

// import IconBook from "../../assets/icons/smart-book.svg";
// import IconNotas from "../../assets/icons/smart-book-pencil.svg";
// import IconStar from "../../assets/icons/smart-star.svg";
// import IconImg from "../../assets/icons/smart-img-load.svg";
// import IconMore from "../../assets/icons/smart-more.svg";

// const ChatForm = () => {
//   return (
//     <>
//       <div className="w-100 d-flex flex-column flex-md-column-reverse" style={{ maxWidth: "770px" }}>
//         <div className={`w-100 ${styles.container_chat_text}  mt-3`}>
//           <textarea
//             name=""
//             placeholder="Envia un mensaje a OdinIA"
//             style={{ width: "100%", minHeight: "100px" }}
//             className={`${styles.input_text} input_text_bg_dark ${styles.font_family}`}
//           ></textarea>
          
//           <div
//             className={`w-100 d-flex flex-wrap flex-sm-nowrap ${styles.container_chat_buttons}  justify-content-between`}
//           >
//             <div className="d-flex flex-row gap-2 w-100">
//               <button className="btn btn-secondary d-flex justify-content-center align-items-center">
//                 <img src={IconUpload} alt="upload" width={14} />
//                 <span className={`${styles.font_family} ms-2`}>Adjuntar</span>
//               </button>

//               <button className="btn btn-secondary d-flex justify-content-center align-items-center">
//                 <img src={IconLoupe} alt="search" width={14} />
//                 <span className={`${styles.font_family} ms-2`}>Buscar</span>
//               </button>

//               <button className="btn btn-secondary d-flex justify-content-center align-items-center">
//                 <img src={IconFocus} alt="upload" width={14} />
//                 <span className={`${styles.font_family} ms-2`}>Analiza</span>
//               </button>
//             </div>

//             <div className="d-flex justify-content-end w-100">
//               <button className="btn btn-dark d-flex justify-content-center align-items-center">
//                 <img src={IconProcess} alt="ear" width={13} />
//                 <span className={`${styles.font_family} ms-3`}>
//                   Voice
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* --------------------------caja botones------------------------- */}
//         <div
//           className="w-100 d-flex justify-content-center flex-wrap mt-4"
//           style={{ maxWidth: "1200px" }}
//         >
//           <div className="d-flex flex-row gap-2 flex-wrap justify-content-center align-items-center">
//             <button
//               className="btn btn-info d-flex justify-content-center align-items-center"
//               data-bs-toggle="modal"
//               data-bs-target="#about"
//             >
//               <img src={IconBook} alt="ear" width={13} />
//               <span className={`text-white ${styles.font_size} ms-1`}>
//                 Resumen texto
//               </span>
//             </button>

//             <button
//               className="btn btn-info d-flex justify-content-center align-items-center"
//               data-bs-toggle="modal"
//               data-bs-target="#helpWriter"
//             >
//               <img src={IconNotas} alt="ear" width={13} />
//               <span className={`text-white ${styles.font_size} ms-1`}>
//                 Ayudame a escribir
//               </span>
//             </button>

//             <button className="btn btn-info d-flex justify-content-center align-items-center">
//               <img src={IconStar} alt="ear" width={13} />
//               <span className={`text-white ${styles.font_size} ms-1`}>
//                 Sorpréndeme
//               </span>
//             </button>

//             <button className="btn btn-info d-flex justify-content-center align-items-center">
//               <img src={IconImg} alt="ear" width={13} />
//               <span className={`text-white ${styles.font_size} ms-1`}>
//                 Analisis de imagenes
//               </span>
//             </button>

//             <button className="btn btn-info d-flex justify-content-center align-items-center">
//               <img src={IconMore} alt="ear" width={13} />
//               <span className={`text-white ${styles.font_size} ms-1`}>
//                 Más
//               </span>
//             </button>
//           </div>
//         </div>
//       </div> 
//     </>
//   );
// };

// export default ChatForm;


import React from "react";
import styles from "./styles.module.css";
import IconLoupe from "../../assets/icons/smart-loupe.svg";
import IconUpload from "../../assets/icons/smart-download.svg";
import IconFocus from "../../assets/icons/smart-focus.svg";
import IconProcess from "../../assets/icons/icon-process.svg";

import IconBook from "../../assets/icons/smart-book.svg";
import IconNotas from "../../assets/icons/smart-book-pencil.svg";
import IconStar from "../../assets/icons/smart-star.svg";
import IconImg from "../../assets/icons/smart-img-load.svg";
import IconMore from "../../assets/icons/smart-more.svg";

const ChatForm = () => {
  return (
    <>
      {/* Se invierte el orden en pantallas md o más grandes */}
      <div className="w-100 d-flex flex-column flex-md-column-reverse" style={{ maxWidth: "770px" }}>
        
        {/* --------------------------Caja de botones (arriba en md)------------------------- */}
        <div className="w-100 d-flex justify-content-center flex-wrap mt-4" style={{ maxWidth: "1200px" }}>
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

        {/* --------------------------Caja de texto (abajo en md)------------------------- */}
        <div className={`d-flex flex-column gap-1 w-100 ${styles.container_chat_text} mt-3`}>
          <textarea
            placeholder="Envía un mensaje a OdinIA"
            style={{ width: "100%", minHeight: "100px" }}
            className={`${styles.input_text} input_text_bg_dark ${styles.font_family}`}
          ></textarea>

          {/* Botones de acción */}
          <div className={`w-100 d-flex flex-wrap flex-sm-nowrap ${styles.container_chat_buttons} justify-content-between`}>
            <div className="d-flex flex-row gap-2 w-100">
              <button className="btn btn-secondary d-flex justify-content-center align-items-center">
                <img src={IconUpload} alt="upload" width={14} />
                <span className={`${styles.font_family} ms-2`}>Adjuntar</span>
              </button>

              <button className="btn btn-secondary d-flex justify-content-center align-items-center">
                <img src={IconLoupe} alt="search" width={14} />
                <span className={`${styles.font_family} ms-2`}>Buscar</span>
              </button>

              <button className="btn btn-secondary d-flex justify-content-center align-items-center">
                <img src={IconFocus} alt="upload" width={14} />
                <span className={`${styles.font_family} ms-2`}>Analiza</span>
              </button>
            </div>

            <div className="d-flex justify-content-center w-100 d-flex-md justify-content-md-end mt-2 mt-md-0">
              <button className="btn btn-dark d-flex justify-content-center align-items-center">
                <img src={IconProcess} alt="ear" width={13} />
                <span className={`${styles.font_family} ms-3`}> Voice </span>
              </button>
            </div>
          </div>
        </div>
      </div>

       {/*-------------------- Modal-1--------------------------*/}
      <div
        className="modal fade modal-dialog-scrollable"
        id="about"
        data-bs-backdrop="false"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <p>
                <strong>Odin IA</strong> es un modelo de inteligencia artificial
                avanzado, diseñado para revolucionar las{" "}
                <strong>campañas políticas</strong> y la{" "}
                <strong>gestión pública</strong>.
              </p>
              <p>
                Su capacidad para procesar{" "}
                <strong>grandes volúmenes de datos en tiempo real</strong> le
                permite anticipar <strong>tendencias</strong>, personalizar la{" "}
                <strong>comunicación</strong> y optimizar la{" "}
                <strong>toma de decisiones</strong>.
              </p>
              <p>
                Al integrar tecnologías de última generación como{" "}
                <strong>Big Data</strong>, <strong>Deep Learning</strong> y un
                sistema de <strong>CRM</strong>, Odin IA proporciona a los
                líderes <strong>políticos</strong> y{" "}
                <strong>gubernamentales</strong> herramientas poderosas para
                perfeccionar sus <strong>estrategias</strong> y conectar de
                manera más efectiva con la <strong>ciudadanía</strong>.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*-------------------- Modal-2--------------------------*/}
      <div
        className="modal fade"
        id="helpWriter"
        data-bs-backdrop="false"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <h4 className="fw-bold">
                Producto Digital: "IntelliLink - Agente de IA para Conexión
                Inteligente"
              </h4>

              <h5 className="mt-3 fw-bold">Descripción General</h5>
              <p>
                <em>IntelliLink</em> es una plataforma avanzada de inteligencia
                artificial que utiliza{" "}
                <strong>chatbots conversacionales</strong> para automatizar y
                optimizar la comunicación, la recolección de datos y la
                movilización de audiencias en tiempo real.
              </p>
              <p>
                Diseñada para{" "}
                <strong>empresas, alcaldías y gobernaciones</strong>,
                IntelliLink ofrece una solución integral que conecta a las
                organizaciones con sus audiencias (clientes, ciudadanos o
                empleados) de manera <strong>inteligente y eficiente</strong>.
                Operando <strong>24/7</strong> a través de múltiples canales
                como <strong>WhatsApp, SMS, redes sociales y sitios web</strong>
                , IntelliLink no solo reduce <strong>costos operativos</strong>{" "}
                al minimizar la necesidad de grandes equipos humanos, sino que
                también <strong>mejora la experiencia del usuario</strong> y
                proporciona <strong>datos estratégicos</strong> para la toma de
                decisiones.
              </p>
              <p>
                Con un enfoque en la <strong>personalización</strong>,{" "}
                <strong>análisis en tiempo real</strong> y{" "}
                <strong>soporte multilingüe</strong>, IntelliLink se adapta a
                las necesidades específicas de cada cliente.
              </p>

              <h5 className="mt-3 fw-bold">Valor Diferencial</h5>
              <ul>
                <li>
                  <strong>Conexión Inteligente</strong>: Comunicación fluida y
                  personalizada adaptada al tono y contexto de cada usuario.
                </li>
                <li>
                  <strong>Análisis Predictivo</strong>: Insights en tiempo real
                  sobre sentimientos y necesidades de la audiencia.
                </li>
                <li>
                  <strong>Adaptabilidad Sectorial</strong>: Optimizado para
                  empresas y gobiernos, multilingüe y con gestión de crisis.
                </li>
                <li>
                  <strong>Cumplimiento y Seguridad</strong>: Protección de datos
                  con cifrado y cumplimiento de normativas.
                </li>
              </ul>

              <h5 className="mt-3 fw-bold">Características Clave</h5>
              <ol>
                <li>
                  <strong>Interacción Multicanal Automatizada</strong>:
                  WhatsApp, SMS, Telegram, Facebook Messenger y sitios web.
                </li>
                <li>
                  <strong>Respuestas Personalizadas</strong>: IA avanzada (ej.
                  GPT-4), adaptadas a datos del usuario.
                </li>
                <li>
                  <strong>Recolección y Análisis de Datos</strong>: Reportes
                  automáticos y dashboards interactivos.
                </li>
                <li>
                  <strong>Movilización Inteligente</strong>: Notificaciones
                  personalizadas y medición de engagement.
                </li>
                <li>
                  <strong>Análisis de Sentimiento</strong>: Evaluación emocional
                  en tiempo real, con alertas.
                </li>
                <li>
                  <strong>Soporte Multilingüe</strong>: Idiomas y dialectos
                  locales, incluyendo lenguas indígenas.
                </li>
                <li>
                  <strong>Gestión de Crisis</strong>: Protocolos predefinidos y
                  escalado humano cuando se requiere.
                </li>
                <li>
                  <strong>Integración con Sistemas</strong>: Compatible con CRMs
                  (Salesforce, HubSpot) y plataformas gubernamentales.
                </li>
              </ol>

              <h5 className="mt-3 fw-bold">Beneficios para los Clientes</h5>
              <ul>
                <li>
                  <strong>Empresas</strong>: Atención automatizada, reducción de
                  equipos y mejora en satisfacción.
                </li>
                <li>
                  <strong>Alcaldías</strong>: Comunicación ciudadana,
                  recolección de datos y gestión de emergencias.
                </li>
                <li>
                  <strong>Gobernaciones</strong>: Campañas masivas, detección de
                  necesidades y respuesta ágil a crisis.
                </li>
              </ul>

              <h5 className="mt-3 fw-bold">Casos de Uso</h5>
              <ol>
                <li>
                  <strong>Empresas - Atención al Cliente</strong>: Ej.
                  Telecomunicaciones reduciendo soporte de 80 a 10 personas.
                </li>
                <li>
                  <strong>Alcaldías - Gestión de Servicios</strong>: Ej.
                  Informes de cortes de agua y reportes de baches, mejorando en
                  un 50% la respuesta.
                </li>
                <li>
                  <strong>Gobernaciones - Movilización Ciudadana</strong>: Ej.
                  Coordinación de vacunación y recopilación de opiniones en
                  tiempo real.
                </li>
              </ol>

              <h5 className="mt-3 fw-bold">Detalles Técnicos y Seguridad</h5>
              <ul>
                <li>
                  <strong>Infraestructura</strong>: Nube escalable (AWS, Azure).
                </li>
                <li>
                  <strong>IA</strong>: Modelos como GPT-4.
                </li>
                <li>
                  <strong>Seguridad</strong>: Cifrado de extremo a extremo y
                  cumplimiento de GDPR.
                </li>
              </ul>

              <h5 className="mt-3 fw-bold">Modelo de Negocio Flexible</h5>
              <p>
                <strong>Suscripción Mensual</strong>:
              </p>
              <ul>
                <li>
                  <strong>Plan Básico</strong>: $500 USD (1 canal, 10,000
                  interacciones, 1 idioma).
                </li>
                <li>
                  <strong>Plan Multicanal</strong>: $1,200 USD (3 canales,
                  50,000 interacciones, multilingüe).
                </li>
                <li>
                  <strong>Plan Premium</strong>: $3,000 USD (canales ilimitados,
                  200,000 interacciones, análisis avanzado).
                </li>
              </ul>
              <p>
                <strong>Extras</strong>:
              </p>
              <ul>
                <li>
                  <strong>Volumen Adicional</strong>: $0.01 por interacción
                  extra.
                </li>
                <li>
                  <strong>Módulos</strong>: Análisis de sentimiento (+$300),
                  integración CRM (+$200).
                </li>
                <li>
                  <strong>Configuración Inicial</strong>: $1,000 - $5,000.
                </li>
              </ul>
              <p>
                <strong>Ahorro para Clientes</strong>: Reducción de equipos
                humanos en un 85-90%, ahorrando $10,000 - $50,000/mes.
              </p>

              <h5 className="mt-3 fw-bold">Soporte y Capacitación</h5>
              <ul>
                <li>
                  <strong>Onboarding Personalizado</strong>: Configuración y
                  entrenamiento.
                </li>
                <li>
                  <strong>Soporte 24/7</strong>: Chat, email y teléfono.
                </li>
                <li>
                  <strong>Actualizaciones Trimestrales</strong>: Nuevas
                  funcionalidades.
                </li>
              </ul>

              <h5 className="mt-3 fw-bold">Visión a Futuro</h5>
              <ul>
                <li>
                  <strong>Análisis Predictivo</strong>: Anticipación de
                  necesidades.
                </li>
                <li>
                  <strong>Integración IoT</strong>: Conexión con sensores
                  urbanos.
                </li>
                <li>
                  <strong>IA Empática</strong>: Mejora en respuestas
                  emocionales.
                </li>
              </ul>

              <h5 className="mt-3 fw-bold">Conclusión</h5>
              <p>
                <em>IntelliLink</em> es más que un chatbot; es una{" "}
                <strong>solución integral de conexión inteligente</strong> que
                transforma la comunicación y gestión para empresas y gobiernos.
                Con{" "}
                <strong>
                  automatización avanzada, personalización y análisis en tiempo
                  real
                </strong>
                , IntelliLink reduce costos, mejora la eficiencia y ofrece
                insights estratégicos, posicionándose como una herramienta
                indispensable para la era digital.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatForm;
