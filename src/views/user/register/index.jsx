import React from "react";
import styles from "./styles.module.css";
import InputForm from "../../../components/inputForm";
import SearchIconLupe from "../../../assets/icons/search-lupe.svg"
import SearchUserCard from "../../../components/searchUserCard";



const users = [
    { userName: "Juan Pérez", charge: "Gerente" },
    { userName: "María Gómez", charge: "Analista" },
    { userName: "Carlos Rodríguez", charge: "Desarrollador" },
    { userName: "Ana Martínez", charge: "Diseñador UX" },
    { userName: "Pedro Sánchez", charge: "Coordinador" },
    { userName: "Laura Fernández", charge: "Marketing" },
    { userName: "Diego López", charge: "Administrador" },
    { userName: "Sofía Ramírez", charge: "Recursos Humanos" },
    { userName: "Roberto Díaz", charge: "Contador" },
    { userName: "Elena Torres", charge: "Asistente" },
    { userName: "Miguel Castro", charge: "Desarrollador Frontend" },
    { userName: "Patricia Ríos", charge: "Project Manager" },
    { userName: "José Vargas", charge: "Consultor" },
    { userName: "Gabriela Ortega", charge: "Ventas" },
    { userName: "Fernando Herrera", charge: "Soporte Técnico" },
    { userName: "Daniela Méndez", charge: "Diseñador Gráfico" },
    { userName: "Ricardo Paredes", charge: "Ingeniero de Software" },
    { userName: "Valeria Cruz", charge: "Coordinador de Eventos" },
    { userName: "Hugo Ramírez", charge: "Redactor" },
    { userName: "Andrea Morales", charge: "Especialista en SEO" }
];


const RegisterUser = () => {
    return (
        <>
            <div className="container">
                <p className={`h6`}>Agregar Usuario</p> 
                <div className={`row ${styles.container} p-5`}>
                    <div className={`col-8 ${styles.scroll_container}`}>
                        <form className={`d-flex flex-column`}>
                            <div className="d-flex flex-column mb-5">
                                <p className="h5 text-black fw-bolder">Información Básica</p>
                                <div className="d-flex gap-3 mt-3">
                                    <InputForm label={"Nombres"} place={"Digite su nombre"} type={"text"} />
                                    <InputForm label={"Apellidos"} place={"Digite sus apellidos"} type={"text"} />
                                    <InputForm label={"Cédula"} place={"Digite su cédula"} type={"text"} />
                                </div>
                                <div className="d-flex gap-3 mt-4">
                                    <InputForm label={"Teléfono"} place={"Digite su teléfono"} type={"text"} />
                                    <InputForm label={"Celular"} place={"Digite su celular"} type={"text"} />
                                    <InputForm label={"Email"} place={"Digite su email"} type={"email"} />
                                </div>
                            </div>

                            <div className="d-flex flex-column mb-5">
                                <p className="h5 text-black fw-bolder">Información Ubicación</p>
                                <div className="d-flex gap-3 mt-3">
                                    <InputForm label={"Dirección"} place={"Digite su dirección"} type={"text"} />
                                    <InputForm label={"Departamento"} place={"Digite su departamento"} type={"text"} />
                                    <InputForm label={"Municipio"} place={"Digite su municipio"} type={"text"} />
                                </div>
                            </div>

                            <div className="d-flex flex-column mb-5">
                                <p className="h5 text-black fw-bolder">Información Zona</p>
                                <div className="d-flex gap-3 mt-3">
                                    <InputForm label={"Dirección"} place={"Digite su dirección"} type={"text"} />
                                    <InputForm label={"Mesa"} place={"Digite su mesa"} type={"text"} />
                                    <InputForm label={"Puesto"} place={"Escoja su puesto"} type={"text"} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end gap-5 mt-3">
                                <div className="w-100">
                                </div>
                                <div className="w-100">
                                </div>
                                <button className={`btn btn-sucess w-100 ${styles.button_save}`}>
                                    <span className={styles.text_btn}>GUARDAR</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={`col-4 ${styles.search_container}`}>
                        <div className="d-flex flex-column">
                            <p className="h5 fw-bolder">Usuarios</p>
                            <div className="input-group mb-3">
                                <input type="text" className={`form-control ${styles.input_custon_styles}`} placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2" />
                                <button className={`btn btn-outline-secondary ${styles.button_custon_styles}`} type="button" id="button-addon2">
                                    <img src={SearchIconLupe} alt="search-icon" />
                                </button>
                            </div>
                            <div className={`${styles.scroll_container_search}`}>
                                <div className="d-flex flex-column gap-4">
                                    {
                                        users.map(({ userName, charge }) => <SearchUserCard userName={userName} charge={charge} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterUser;
