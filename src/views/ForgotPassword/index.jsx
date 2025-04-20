import React, { useState } from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
import BlackIcon from "../../assets/icons/back.svg"
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

const ForgotPassword = ({ darkMode }) => {
  const [email, setEmail] = useState('');
  // const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const navegate = useNavigate();

  const handleNavegate = () => {
    setEmail(""); 
    navegate('/'); 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await AuthService.requestPasswordReset(email);

      if (response.status === 200) {
        // setEmail('');
        setMessage(!message)
      }

    } catch (err) {
      if (err.response?.status === 404) {

        setError('El correo electrónico no está registrado en nuestro sistema');
      } else {
        setError('Ocurrió un error al procesar tu solicitud');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (

    <div className="container-fluid d-flex justify-content-center align-items-center px-3 mt-5">
      {
        !message ? (<div className="w-100" style={{ maxWidth: '500px' }}>
          <div className="w-100 d-flex justify-content-between align-items-center mb-5">
            <div className={`w-100 ${darkMode === true ? styles.inverte : ""}`}>
              <Link to="/" className="btn m-0">
                <img src={BlackIcon} width={23} alt="back" />
              </Link>
            </div>
            <div className="text-center w-100 d-flex justify-content-center">
              <p className="fs-4 fw-bolder m-0 title-section">Restablecer contraseña</p>
            </div>
            <div className="w-100">
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              {/* <label htmlFor="email" className="form-label">
                Correo electrónico
              </label> */}
              <input
                type="email"
                className={`form-control ${error ? 'is-invalid' : ''} ${styles.custom_field}`}
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder='Correo electrónico'
                required
              />
              {error && <div className="invalid-feedback">{error}</div>}
            </div>
            <div className="w-100 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary btn-primary-custom py-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Enviando...
                  </>
                ) : (
                  'Restablecer contraseña'
                )}
              </button>
            </div>
          </form>
        </div>) : (
          <>
            <section className={`d-flex justify-content-center align-items-center ${styles.message_section}`}>
              <div className={`card ${styles.card_message}`}>
                <div className="card-body">
                  <p className="card-text text-center">
                    Se ha enviado un enlace para restablecer la contraseña a <b><i>{ email }</i></b>.
                  </p>
                  <p className="text-center">
                    Revisa tu bandeja de entrada y sigue las instrucciones para completar el proceso en {' '}
                    <a href="https://mirionegro.com" target="_blank" className={styles.link}>Mirionegro.com</a>.
                  </p>
                  <p className="text-center">
                    Si no encuentras el mensaje, revisa también la carpeta de correo no deseado (<b><i>Span</i></b>).
                  </p>
                  <div className="d-flex justify-content-center w-100">
                    <button className={`btn ${styles.button} ${styles.button_card}`} onClick={handleNavegate}>Volver</button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )
      }
    </div>
  );
};

export default ForgotPassword;
