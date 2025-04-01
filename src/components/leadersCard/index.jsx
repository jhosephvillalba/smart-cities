import React from "react";
import styles from "./styles.module.css"
import LeaderIcon from "../../assets/icons/leader-icon.svg"

const LeaderCard = ({ leader = "Joseph Villalba", document = "1234567", email = "neohveil@gmail.com", totalUsers = 30 }) => {
    return (
        <>
            <div className={`row ${styles.container_card} px-2 py-3`}>
                <div className={`col-8`}>
                    <div className="d-flex justify-content-start gap-3">
                        <img className={`${styles.card_icon_size}`} src={LeaderIcon} alt="leader-icon" />
                        <div className={`d-flex justify-content-start`}>
                            <ul className={`${styles.data_leader}`}>
                                <li className={`${styles.data_item}`}>
                                    <p className="m-0">
                                        <span className="fw-bold">Lider: </span>{leader}
                                    </p>
                                </li>
                                <li className={`${styles.data_item}`}>
                                    <p className="m-0">
                                        <span className="fw-bold">Cedula: </span>{document}
                                    </p>
                                </li>
                                <li className={`${styles.data_item}`}>
                                    <p className="m-0 text-nowrap"><span className="fw-bold">Email: </span>{email}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`col-4`}>
                    <div className={`w-100 d-flex flex-column justify-content-start ${styles.counter_text}`}>
                        <p className="fw-bolder m-0 text-center fs-2">{totalUsers}</p>
                        <p className={`m-0 text-center ${styles.counter_title}`}>Usuarios</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeaderCard;