import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";


function MensajeRegistroExitoso({ name }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // Estado para mostrar spinner

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Después de 2 segundos, quitamos el spinner
        }, 2000);

        return () => clearTimeout(timer); // Siempre limpia el timer
    }, []);

    const handleStart = () => {
        navigate('/');
    };

    return (
        <>
            <div className={`card ${styles.card_message}`}>
                <div className="card-body text-center">
                    <p className="card-text">
                        ¡Hola <b><i>{name}</i></b>{''}!
                    </p>
                    <p className="text-center">
                        Hemos enviado un correo para validar tu email.
                        Por favor, revisa tu bandeja de entrada o la carpeta de correo no deseado <b><i>(spam)</i></b>.
                    </p>

                    {loading ? (
                        <div className="d-flex justify-content-center my-4">
                            <div className="spinner-border text-primary" role="status" style={{ width: '2rem', height: '2rem' }}>
                                <span className="visually-hidden">Cargando...</span>
                            </div>
                        </div>
                    ) : (
                        <>
                            <p className="text-center">Da click en el botón "Comencemos", para iniciar.</p>
                            <div className="d-flex justify-content-center w-100 my-4">
                                <button className={`btn ${styles.button} ${styles.button_card}`} onClick={handleStart}>¡Comencemos!</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

const MessageRegister = ({ name="Anonymus", type }) => {

    const navegate = useNavigate();


    return (
        <section className={`d-flex justify-content-center align-items-center ${styles.message_section}`}>
            {type === 'cuenta_registrada' ? (
                <>
                    <div className={`card ${styles.card_message}`}>
                        <div className="card-body">
                            <p className="card-text text-center">Hola <b><i>{name}</i></b></p> <p className="text-center">ya te encuentras registrado en la plataforma de <a href="Electrovia.com.co" target="_blank" className={styles.link}>ayudaelectrovia.com</a> haz click en el botón para iniciar sesión. </p>
                            <div className="d-flex justify-content-center w-100">
                                <a href="#" className={`btn ${styles.button} ${styles.button_card}`} onClick={() => navegate('/login')}>Iniciar sesión</a>
                            </div>
                        </div>
                    </div>
                </>
            ) : type === 'registro' ? (
                <MensajeRegistroExitoso name={name} />
            ) : (
                <p>¡Hola! ¿En qué podemos ayudarte hoy?</p> // Opcional: por si no pasa 'bienvenida' o 'registro'
            )}
        </section>
    );
}


export default MessageRegister; 