import React, { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
import BlackIcon from "../../assets/icons/back.svg"

const PasswordReset = ({ darkMode }) => {
  const [email, setEmail] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessageSent(false);

    try {
      const response = await axios.post('/api/password-reset', { email });
      if (response.status === 200) {
        setMessageSent(true);
        setEmail('');
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
      <div className="w-100" style={{ maxWidth: '500px' }}>
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

          {messageSent && (
            <div className="mt-4 text-center text-success small">
              Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
