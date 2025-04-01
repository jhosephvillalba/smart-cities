import React from "react";
import styles from "./styles.module.css";


const data = [
    { id: 1, user: "Juan Pérez", leader: "Carlos Gómez", message: "Tienes una reunión pendiente", action: "Ver reunión" },
    { id: 2, user: "María González", leader: "Luis Fernández", message: "Nuevo reporte disponible", action: "Ver reporte" },
    { id: 3, user: "Carlos López", leader: "Ana Martínez", message: "Se requiere aprobación de presupuesto", action: "Aprobar" },
    { id: 4, user: "Ana Ramírez", leader: "Pedro Torres", message: "Actualización de proyecto", action: "Ver detalles" },
    { id: 5, user: "Pedro Fernández", leader: "Laura Méndez", message: "Solicitan tu opinión en un documento", action: "Revisar documento" },
    { id: 6, user: "Laura Herrera", leader: "Diego Castro", message: "Nuevo usuario registrado", action: "Ver usuario" },
    { id: 7, user: "Diego Castro", leader: "Sofía Medina", message: "El equipo ha completado su tarea", action: "Revisar tarea" },
    { id: 8, user: "Sofía Medina", leader: "Javier Ortiz", message: "Cambio de horario en la reunión", action: "Actualizar agenda" },
    { id: 9, user: "Javier Ortiz", leader: "Patricia Ríos", message: "Un cliente dejó un comentario", action: "Ver comentario" },
    { id: 10, user: "Patricia Ríos", leader: "Julieta Sánchez", message: "Se ha asignado un nuevo proyecto", action: "Ver proyecto" },
    { id: 11, user: "Julieta Sánchez", leader: "Roberto Vargas", message: "Solicitud de cambio en presupuesto", action: "Aprobar cambio" },
    { id: 12, user: "Roberto Vargas", leader: "Esteban Molina", message: "Se ha publicado un nuevo informe", action: "Descargar informe" },
    { id: 13, user: "Esteban Molina", leader: "Isabel Ríos", message: "Actualización de estado en tareas", action: "Ver estado" },
    { id: 14, user: "Isabel Ríos", leader: "Alberto Guzmán", message: "El equipo ha enviado un reporte", action: "Revisar reporte" },
    { id: 15, user: "Alberto Guzmán", leader: "Carmen Vega", message: "Nueva solicitud de reunión", action: "Agendar" },
    { id: 16, user: "Carmen Vega", leader: "Emilio Navarro", message: "Recordatorio de entrega", action: "Ver entrega" },
    { id: 17, user: "Emilio Navarro", leader: "Marcelo Ortiz", message: "Actualización en políticas internas", action: "Leer actualización" },
    { id: 18, user: "Marcelo Ortiz", leader: "Patricia Ramos", message: "Revisión de contrato pendiente", action: "Revisar contrato" },
    { id: 19, user: "Patricia Ramos", leader: "Diego Silva", message: "Se ha aprobado tu solicitud", action: "Ver aprobación" },
    { id: 20, user: "Diego Silva", leader: "Adriana Mendoza", message: "Tu equipo tiene una nueva tarea", action: "Ver tarea" },
    { id: 21, user: "Adriana Mendoza", leader: "Jorge Fernández", message: "Actualización en presupuesto", action: "Revisar presupuesto" },
    { id: 22, user: "Jorge Fernández", leader: "Natalia Romero", message: "Un proveedor ha enviado una cotización", action: "Ver cotización" },
    { id: 23, user: "Natalia Romero", leader: "César Pacheco", message: "Cambio de ubicación en la reunión", action: "Actualizar ubicación" },
    { id: 24, user: "César Pacheco", leader: "Rodrigo Torres", message: "Se ha asignado un mentor a tu equipo", action: "Conocer mentor" },
    { id: 25, user: "Rodrigo Torres", leader: "Tatiana Rojas", message: "Nuevo cliente registrado", action: "Ver cliente" },
    { id: 26, user: "Tatiana Rojas", leader: "Federico Pérez", message: "Problema en el sistema detectado", action: "Reportar problema" },
    { id: 27, user: "Federico Pérez", leader: "Lorena Castro", message: "Se han actualizado las métricas", action: "Ver métricas" },
    { id: 28, user: "Lorena Castro", leader: "Samuel Hernández", message: "Reunión de equipo programada", action: "Unirse a reunión" },
    { id: 29, user: "Samuel Hernández", leader: "Julia Vargas", message: "Encuesta de satisfacción disponible", action: "Responder encuesta" },
    { id: 30, user: "Julia Vargas", leader: "Silvana Guzmán", message: "Nuevo documento compartido contigo", action: "Abrir documento" }
  ];
  
const Notifications = () => {
    return (
        <>
            <div className="container">
                <p className={`h6`}>Notificaciones</p>
                <div className={`d-flex flex-column ${styles.container} p-5`}>
                    <div className={`row g-5 ${styles.width_section}`}>
                        <div className="col-2 p-0">
                            <p className="h6 fw-bolder">
                                Usuario
                            </p>
                        </div>
                        <div className="col-2 p-0">
                            <p className="h6 fw-bolder">
                                Líder
                            </p>
                        </div>
                        <div className="col-5">
                            <p className="h6 fw-bolder">
                                Mensaje
                            </p>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                    <div className={`mt-4 ${styles.section_data}`}>
                        
                        {
                            data.map(({ id, user, leader, message, action }) => {
                                return (
                                    <>
                                        <div className={`row g-5  ${styles.width_section} ${styles.data_row}`} key={id}>
                                            <div className={`col-2 p-0 ${styles.text_container}`}>
                                                <p className={`text-start`}>
                                                    <span className="fw-bolder d-block">
                                                        {user}
                                                    </span>
                                                    <span className={`${styles.text_description}`}>Usuario</span>
                                                </p>
                                            </div>
                                            <div className={`col-2 p-0 ${styles.text_container}`}>
                                                <p className={`text-start`}>
                                                    <span className="fw-bolder d-block">
                                                        {leader}
                                                    </span>
                                                    <span className={`${styles.text_description}`}>Lider de grupo</span>
                                                </p>
                                            </div>
                                            <div className={`col-5 ${styles.text_container}`}>
                                                <p className="text-start text-black">
                                                    {message}
                                                </p>
                                            </div>
                                            <div className="col-3">
                                                <button className={styles.button_action}>
                                                    {action}
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default Notifications