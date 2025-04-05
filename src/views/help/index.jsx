import React from "react";
import styles from "./styles.module.css";
import MoreIcon from "../../assets/icons/+.svg";
import BlackIcon from "../../assets/icons/back.svg"
import { Link } from "react-router-dom";
import SmartCities from "../../assets/icons/smart-cities.svg"

const faqs = [
  {
    id: 1,
    title: "¿Cómo usar OdinIA?",
    content: "Para usar OdinIA, simplemente accede a la plataforma, ingresa tu consulta en el campo de texto y presiona el botón de enviar. La inteligencia artificial procesará tu solicitud y te dará una respuesta en tiempo real."
  },
  {
    id: 2,
    title: "¿Mis datos quedan grabados?",
    content: "No, OdinIA no almacena datos personales ni conversaciones. Todas las interacciones son temporales y se eliminan automáticamente después de la sesión para garantizar la privacidad del usuario."
  },
  {
    id: 3,
    title: "¿Qué incluye la inversión inicial?",
    content: "La inversión inicial cubre el acceso completo a la plataforma, soporte técnico, mantenimiento de software y actualizaciones durante un periodo determinado. También incluye la capacitación inicial sobre su uso."
  },
  // {
  //   id: 4,
  //   title: "¿Puedo integrar OdinIA con otras plataformas?",
  //   content: "Sí, OdinIA ofrece integración con varias plataformas a través de APIs. Esto permite conectar la IA con sistemas de mensajería, CRMs, ERPs y otras herramientas empresariales para mejorar la eficiencia operativa."
  // },
  // {
  //   id: 5,
  //   title: "¿OdinIA puede responder en varios idiomas?",
  //   content: "Sí, OdinIA soporta múltiples idiomas y puede responder en el idioma en el que se le haga la pregunta. Actualmente, los idiomas más soportados incluyen español, inglés, francés y portugués."
  // },
  // {
  //   id: 6,
  //   title: "¿Qué hacer si la IA no entiende mi pregunta?",
  //   content: "Si OdinIA no comprende una consulta, intenta reformular tu pregunta con mayor claridad. También puedes proporcionar más contexto o dividir la pregunta en partes más pequeñas."
  // },
  // {
  //   id: 7,
  //   title: "¿Se puede personalizar la IA para mi empresa?",
  //   content: "Sí, OdinIA ofrece opciones de personalización para empresas. Se pueden entrenar modelos específicos según las necesidades del negocio, integrarse con bases de datos propias y configurar respuestas automáticas según los requerimientos."
  // },
  // {
  //   id: 8,
  //   title: "¿Cuáles son los requisitos técnicos para usar OdinIA?",
  //   content: "OdinIA es una plataforma basada en la nube, por lo que solo necesitas un navegador actualizado y conexión a Internet para acceder y utilizar sus funcionalidades sin necesidad de instalar software adicional."
  // },
  // {
  //   id: 9,
  //   title: "¿Cuál es el tiempo de respuesta de la IA?",
  //   content: "El tiempo de respuesta varía según la complejidad de la consulta, pero en promedio, OdinIA responde en menos de 2 segundos. Consultas más elaboradas pueden tardar un poco más."
  // },
  // {
  //   id: 10,
  //   title: "¿Qué medidas de seguridad tiene OdinIA?",
  //   content: "OdinIA cuenta con cifrado de extremo a extremo, protección contra ataques cibernéticos y estrictos protocolos de seguridad para garantizar la confidencialidad y protección de los datos de los usuarios."
  // }
];


const Help = () => {

  return (
    <div className="container-lg d-flex flex-column text_section">
      <div className="w-100 d-flex justify-content-between align-items-center my-4">
        <div className="w-100">
          <Link to="/" className="btn m-0">
            <img src={BlackIcon} width={23} alt="back" />
          </Link>
        </div>
        <div className="text-center w-100 d-flex justify-content-center">
          <p className="fs-2 m-0">Preguntas</p>
        </div>
        <div className="w-100">
        </div>
      </div>
      <div className={`accordion accordion-flush ${styles.container_data}`} id="dataHelp">
        <div className={`${styles.help_container}`}>
          {
            faqs.map(({ id, title, content }) => {
              return (
                <>
                  <div className="accordion-item mt-3" key={id}>
                    <h2 className="accordion-header text-black" id={`flush-heading-${id}`}>
                      <button className="accordion-button collapsed d-flex justify-content-center align-items-center gap-3" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${id}`} aria-expanded="false" aria-controls={`flush-collapse-${id}`}>
                        <img src={MoreIcon} alt="" />
                        <span className="fw-bolder">{title}</span>
                      </button>
                    </h2>
                    <div id={`flush-collapse-${id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading-${id}`} data-bs-parent="#dataHelp">
                      <div className={`accordion-body ${styles.text_styles}`}>{content}</div>
                    </div>
                  </div>
                </>
              );
            })
          }
        </div>
      </div>
      <div className="mt-5 mb-3 d-flex justify-content-center">
        <img src={SmartCities} width={180} alt="smart cities" />
      </div>
    </div>
  );
}

export default Help;
