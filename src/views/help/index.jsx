import React from "react";
import styles from "./styles.module.css";
import MoreIcon from "../../assets/icons/+.svg";
import BlackIcon from "../../assets/icons/back.svg"
import { Link } from "react-router-dom";
import SmartCities from "../../assets/icons/smart-cities.svg"

const faqs = [
  {
    id: 1,
    title: "¿Qué es mirionegro.com y para qué sirve?",
    content: "mirionegro.com es un centro de ayuda al ciudadano basado en Inteligencia Artificial creada por la Alcaldía de Rionegro para brindar atención, información y apoyo a los ciudadanos de forma rápida y eficiente."
  },
  {
    id: 2,
    title: "¿Qué tipo de información puedo encontrar en mirionegro.com?",
    content: "Puedes acceder a información general de la Alcaldía, trámites, servicios, eventos, procedimientos y datos relevantes de cada secretaría."
  },
  {
    id: 3,
    title: "¿Cómo funciona la inteligencia artificial en mirionegro.com?",
    content: "La plataforma utiliza inteligencia artificial para responder en tiempo real a tus preguntas, guiarte en trámites y ofrecer soluciones personalizadas, todo en menos de 3 minutos."
  },
  {
    id: 4,
    title: "¿Está disponible en otros idiomas además del español?",
    content: "Sí. mirionegro.com puede atenderte en varios idiomas, facilitando el acceso de la información a personas de diferentes orígenes, lo que te permite consultar y recibir información en español, inglés, francés, italiano, alemán y portugués."
  },
  {
    id: 5,
    title: "¿En qué horarios puedo acceder a mirionegro.com?",
    content: "La plataforma está disponible 24 horas al día, 7 días a la semana, los 365 días del año."
  },
  {
    id: 6,
    title: "¿Qué diferencia a mirionegro.com de otros canales de atención ciudadana?",
    content: "Su tecnología basada en inteligencia artificial permite una atención inmediata, precisa y sin tiempos de espera, lo que transforma la experiencia del ciudadano."
  },
  {
    id: 7,
    title: "¿Puedo acceder a información sobre trámites de la Alcaldía directamente desde mirionegro.com?",
    content: "Sí. La herramienta te guía paso a paso en distintos trámites y procedimientos, facilitando el acceso a los servicios de la Alcaldía."
  },
  {
    id: 8,
    title: "¿Quién creó mirionegro.com?",
    content: "Fue desarrollada por la Empresa de Seguridad del Oriente - ESO Rionegro S.A.S, para la Alcaldía de Rionegro como parte de su compromiso con la innovación y la transformación digital del municipio."
  }
];


const Help = ({ darkMode }) => {

  return (
    <div className="container container-lg-fluid d-flex flex-column text_section">
      <div className="w-100 d-flex justify-content-between align-items-center my-4">
        <div className={`w-100 ${darkMode === true ? styles.inverte : ""}`}>
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
        <div className={`${styles.help_container} p-lg-2`}>
          {
            faqs.map(({ id, title, content }) => {
              return (
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
