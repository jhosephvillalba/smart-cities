import React from "react"
import styles from "./styles.module.css"
import SearchIconLupe from "../../assets/icons/icon-loupe.svg"

const lideres = [
    {
        id: 3,
        full_name: "María González"
    },
    {
        id: 4,
        full_name: "Carlos Ramírez"
    },
    {
        id: 5,
        full_name: "Ana López"
    },
    {
        id: 6,
        full_name: "Pedro Martínez"
    },
    {
        id: 7,
        full_name: "Lucía Herrera"
    },
    {
        id: 8,
        full_name: "Miguel Torres"
    },
    {
        id: 9,
        full_name: "Elena Rivas"
    },
    {
        id: 10,
        full_name: "Santiago Mendoza"
    }
];


const ReportFilterBar = () => {
    return (
        <>
            <div className="row g-2">
                <div className="col-9 p-0">
                    <div className="row p-0">
                        <div className="col-8 p-0">
                            <div className="d-flex">
                                <select className={`form-select ${styles.options}`} aria-label="Default select example" defaultValue="defaultValue">
                                    <option value="defaultValue">Líder</option>
                                    {
                                        lideres.map(({ id, full_name }) =>
                                            <option key={id} value={id}>{full_name}</option>)
                                    }
                                </select>
                                <select className={`form-select ms-2 ${styles.options}`} aria-label="Default select example" defaultValue="defaultValue">
                                    <option value="defaultValue">Líder</option>
                                    {
                                        lideres.map(({ id, full_name }) =>
                                            <option key={id} value={id}>{full_name}</option>)
                                    }
                                </select>
                                <select className={`form-select ms-2 ${styles.options}`} aria-label="Default select example" defaultValue="defaultValue">
                                    <option value="defaultValue">Líder</option>
                                    {
                                        lideres.map(({ id, full_name }) =>
                                            <option key={id} value={id}>{full_name}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-4">
                            <button className={`btn btn-sucess w-100 ${styles.button_generate}`}>
                                <span className={`${styles.text_btn}`}>Generar</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="d-flex w-100 ms-3 pe-3 ps-0">
                        <input type="text" className={`form-control ${styles.input_custon_styles}`} placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2" />
                        <button className={`btn btn-outline-secondary ${styles.button_custon_styles}`} type="button" id="button-addon2">
                            <img src={SearchIconLupe} alt="search-icon" />
                        </button>
                    </div>
                </div>


            </div>
        </>
    );
}

export default ReportFilterBar