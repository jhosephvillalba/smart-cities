import React from "react";
import styles from "./styles.module.css";
import MoreIcon from "../../assets/icons/+Electrovia.svg";
import BlackIcon from "../../assets/icons/back.svg"
import { Link } from "react-router-dom";
import SmartCities from "../../assets/icons/technocorp-black.svg";
import SmartCitiesLigth from "../../assets/icons/technocorp-white.svg";


const faqs =[
      { id: 1, 
        title: "Bogotá (Oficina en funcionamiento 4 de agosto 2025)", 
        content: "Pronto estaremos en línea" 
    },
      { 
        id: 2, 
        title: "Huila (Oficina en funcionamiento 4 de agosto 2025)", 
        content: "Pronto estaremos en línea" 
    },
      { 
        id: 3, 
        title: "Quindío (Oficina en funcionamiento 4 de agosto 2025)",
         content: "Pronto estaremos en línea" 
        },
      { id: 4, title: "Valle del Cauca (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" },
      { id: 5, title: "Tolima (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" },
      { id: 6, title: "Antioquia (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" },
      { id: 7, title: "Risaralda (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" },
      { id: 8, title: "Caldas (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" },
      { id: 9, title: "Córdoba (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" },
      { id: 10, title: "Atlántico (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" },
      { id: 11, title: "Magdalena (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" },
      { id: 12, title: "Boyacá (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" },
      { id: 13, title: "Bolívar (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" },
      { id: 14, title: "Cundinamarca (Oficina en funcionamiento 4 de agosto 2025)", content: "Pronto estaremos en línea" }
    ]; 
  


const Cobertura = ({ darkMode }) => {

  return (
    <div className="container container-lg-fluid d-flex flex-column text_section">
      <div className="w-100 d-flex justify-content-between align-items-center my-2">
        <div className={`w-100 ${darkMode === true ? styles.inverte : ""}`}>
          <Link to="/" className="btn m-0">
            <img src={BlackIcon} width={23} alt="back" />
          </Link>
        </div>
        <div className="text-center w-100 d-flex flex-column justify-content-center" >
          <p className="fs-2 m-0" style={{width: "max-content"}}>Nuestra Cobertura</p>
        </div>
        <div className="w-100">
          
        </div>
      </div>
      <div className="m-0 d-flex flex-column justify-content-center align-items-center">
        <p className={`text-center mb-1 mt-0`} style={{color:darkMode===true ? "#fff" : "#000"}}>En este momento estamos en proceso de expansión, por lo que pronto estaremos en más ciudades. Si quieres saber más sobre nuestra cobertura, puedes contactarnos.</p>
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

export default Cobertura;
