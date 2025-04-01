import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

import IconAddUser from "../../assets/icons/new-user.svg";

const AddUser = () => {
    const navigate = useNavigate(); 
    const handlerNavigate = () => navigate('/add-user/register');

    return (
        <>
            <div className="container text_section">
                <p className={`${styles.title_section} h6`}>Agregar Usuario</p>
                <div className={`d-flex justify-content-center align-items-center ${styles.container_button}`}>
                    <button className={`btn ${styles.button}`} onClick={handlerNavigate}>
                        <img className={`${styles.button_img}`} src={IconAddUser} alt="add-user" />
                    </button>
                </div> 
            </div>
        </>
    ); 
}

export default AddUser;
