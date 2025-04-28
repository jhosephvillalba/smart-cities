import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import styles from "./styles.module.css";
import BlackIcon from "../../assets/icons/back.svg";
import SmartCities from "../../assets/icons/technocorp-black.svg";
import SmartCitiesLigth from "../../assets/icons/technocorp-white.svg";
import AuthService from "../../services/AuthService";

const VerifyEmail = ({ darkMode }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerification = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      console.log({ token });
      const response = await AuthService.verifyEmail(token); // debes crear este método en AuthService
      if (response.status === 200) {
        setVerified(true);
        setTimeout(() => navigate("/"), 4000);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Hubo un problema al verificar tu correo. Inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text_section">
      <div
        className={`row justify-content-center align-items-center ${styles.section_content}`}
      >
        {!verified ? (
          <div className="col-md-6">
            <div className="w-100 d-flex justify-content-between align-items-center mb-5">
              {/* <div className={`w-100 ${darkMode ? styles.inverte : ""}`}>
                                <Link to="/" className="btn m-0">
                                    <img src={BlackIcon} width={23} alt="back" />
                                </Link>
                            </div> */}
              <div className="text-center w-100 d-flex justify-content-center">
                <p className="fs-4 fw-bolder m-0 title-section">
                  Verificación de Email
                </p>
              </div>
              {/* <div className="w-100"></div> */}
            </div>

            {errorMessage && (
              <div className="alert alert-danger text-center" role="alert">
                {errorMessage}
              </div>
            )}

            <div className="d-flex flex-column align-items-center">
              <p className="text-center mb-4">
                Confirma tu cuenta haciendo clic en el botón que verás a
                continuación.
              </p>
              <button
                className="btn btn-primary btn-primary-custom w-100 p-2"
                onClick={handleVerification}
                disabled={loading}
              >
                {loading ? "Verificando..." : "Verificar Cuenta"}
              </button>
            </div>
          </div>
        ) : (
          <section
            className={`d-flex justify-content-center align-items-center ${styles.message_section}`}
          >
            <div className={`card ${styles.card_message}`}>
              <div className="card-body">
                <p className="card-text text-center">
                  ¡Tu cuenta ha sido verificada exitosamente! 🎉
                </p>
                <p className="text-center">
                  Redirigiéndote al inicio en unos segundos...
                </p>
                <div className="d-flex justify-content-center w-100 mt-4">
                  <button
                    className={`btn ${styles.button} ${styles.button_card}`}
                    onClick={() => navigate("/")}
                  >
                    Ir al Inicio
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <div className="d-flex justify-content-center w-100 my-lg-1 my-3 justify-content-lg-end p-2">
        <a href="https://www.grupotechnocorp.com/" target="_blank" rel="noreferrer">
          {darkMode === true ? (
            <img src={SmartCitiesLigth} width={150} alt="smart-cities" />
          ) : (
            <img src={SmartCities} width={150} alt="smart-cities" />
          )}
        </a>
      </div>
    </div>
  );
};

export default VerifyEmail;
