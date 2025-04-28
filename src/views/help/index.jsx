import React from "react";
import styles from "./styles.module.css";
import MoreIcon from "../../assets/icons/+Electrovia.svg";
import BlackIcon from "../../assets/icons/back.svg"
import { Link } from "react-router-dom";
import SmartCities from "../../assets/icons/technocorp-black.svg";
import SmartCitiesLigth from "../../assets/icons/technocorp-white.svg";


const faqs = [
  {
    id: 1,
    title: "¿Cómo descargar y utilizar la aplicación móvil de ElectroVía?",
    content: "Descarga la app de ElectroVía gratis desde la App Store (iOS) o Google Play (Android). Regístrate con tu correo electrónico, configura tu perfil, y usa funciones como localizar estaciones de carga, planificar rutas, gestionar pagos electrónicos, monitorear el estado de carga en tiempo real, y recibir recomendaciones personalizadas. ¡Es intuitiva y diseñada para tu comodidad!"
  },
  {
    id: 2,
    title: "¿Cuánto cuesta cargar un vehículo eléctrico en las estaciones de ElectroVía?",
    content: "Las tarifas varían según el tipo de vehículo y la estación, cobrando por kilovatio-hora (kWh) o tiempo de uso. En promedio, cargar un automóvil eléctrico cuesta entre COP 1,000 y COP 2,000 por kWh. Consulta las tarifas específicas en nuestra app o sitio web, donde también ofrecemos planes de suscripción para usuarios frecuentes con descuentos."
  },
  {
    id: 3,
    title: "¿Qué tipos de vehículos eléctricos son compatibles con las estaciones de carga de ElectroVía?",
    content: "Nuestras estaciones son compatibles con todos los vehículos eléctricos, incluyendo bicicletas, motocicletas, automóviles, autobuses y camiones. Soportamos estándares internacionales como CCS, CHAdeMO y Type 2, asegurando que tu vehículo pueda cargarse de manera segura y eficiente."
  },
  {
    id: 4,
    title: "¿Es necesario registrarse o pagar una membresía para usar las estaciones de carga?",
    content: "Sí, necesitas registrarte en nuestra app o sitio web para acceder a la red de cargadores y gestionar pagos. No cobramos membresía inicial, pero ofrecemos planes premium opcionales que incluyen descuentos, prioridad en estaciones concurridas, y funciones avanzadas en la app para usuarios frecuentes."
  },
  {
    id: 5,
    title: "¿Qué debo hacer si una estación de carga no funciona o está ocupada?",
    content: "Si una estación no funciona, repórtalo a través de la app o llama a nuestra línea de soporte al 3002379876. Para verificar la disponibilidad, usa la app, que muestra el estado de los cargadores en tiempo real. Nuestro equipo de mantenimiento garantiza un 99% de tiempo de actividad, y respondemos a reportes en menos de 24 horas."
  },
  {
    id: 6,
    title: "¿Ofrecen soluciones para empresas con flotas de vehículos eléctricos?",
    content: "¡Sí! Ofrecemos soluciones personalizadas para flotas, incluyendo la instalación de estaciones de carga en tus instalaciones, software de gestión de consumos, y consultoría para optimizar la transición a la electromovilidad. Contáctanos en www.electrovia.com.co o al 3002379876 para diseñar una solución a medida."
  },
  {
    id: 7,
    title: "¿Utilizan energía renovable en sus estaciones de carga?",
    content: "Nos comprometemos con la sostenibilidad. Actualmente, usamos sistemas de gestión inteligente para optimizar el consumo energético, y para 2028, el 50% de la energía de nuestras estaciones provendrá de fuentes renovables. Aspiramos a obtener la certificación de carbono neutral para 2030, reduciendo la huella de carbono de la movilidad eléctrica."
  },
  {
    id: 8,
    title: "¿Cómo puedo contactar al servicio al cliente de ElectroVía?",
    content: "Puedes contactarnos a través de nuestra línea de soporte 3002379876, o diligenciando formulario de contacto en www.electrovia.com.co. También ofrecemos chat en vivo en nuestra app para resolver dudas, reportar problemas, o consultar sobre servicios como mantenimiento o consultoría."
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
      <a href="https://www.grupotechnocorp.com/" target='_blank' rel="noreferrer">
          {
            darkMode === true ? <img src={SmartCitiesLigth} width={150} alt="smart-cities" /> : <img src={SmartCities} width={150} alt="smart-cities" />
          }
        </a>
      </div>
    </div>
  );
}

export default Help;
