// import React, { useState, useEffect } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import AuthService from '../../services/AuthService';
// import styles from "./styles.module.css";

// const ResetPassword = ({ darkMode }) => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [token, setToken] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const urlToken = searchParams.get("token");
//     console.log("Token en URL:", urlToken);

//     if (!urlToken) {
//       setError("Token inválido o expirado");
//     }

//     setToken(urlToken || "");
//   }, [searchParams]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     if (!token) {
//       setIsLoading(false);
//       return setError("Token no válido");
//     }

//     if (password !== confirmPassword) {
//       setIsLoading(false);
//       return setError("Las contraseñas no coinciden");
//     }

//     if (password.length < 6) {
//       setIsLoading(false);
//       return setError("La contraseña debe tener al menos 6 caracteres");
//     }

//     try {
//       const response = await AuthService.ForgotPassword({
//         token,
//         password,
//         password_confirm: password
//       });

//       console.log("Respuesta del servidor:", response);


//       if (response.status === 200 || response.data?.success) {
//         setSuccess(true);

//         setTimeout(() => navigate("/login"), 2000);

//       } else {
//         throw new Error("Respuesta inesperada del servidor");
//       }

//     } catch (err) {
//       console.error("Error en resetPassword:", err);
//       setError(err?.response?.data?.message || "Error al resetear la contraseña");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="container-fluid d-flex justify-content-center align-items-center px-3 mt-5">
//       <div className="w-100" style={{ maxWidth: "500px" }}>
//         <div className="w-100 d-flex justify-content-between align-items-center mb-5">
//           <div className="text-center w-100 d-flex justify-content-center">
//             <p className="fs-4 fw-bolder m-0 title-section">
//               Restablecer contraseña
//             </p>
//           </div>
//         </div>

//         {success ? (
//           <div className="alert alert-success text-center">
//             Contraseña actualizada correctamente. Redirigiendo al login...
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className={`form-control ${error ? "is-invalid" : ""} ${styles.custom_field}`}
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   setError("");
//                 }}
//                 placeholder="Nueva contraseña"
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <input
//                 type="password"
//                 className={`form-control ${error ? "is-invalid" : ""} ${styles.custom_field}`}
//                 value={confirmPassword}
//                 onChange={(e) => {
//                   setConfirmPassword(e.target.value);
//                   setError("");
//                 }}
//                 placeholder="Confirmar contraseña"
//                 required
//               />
//               {error && <div className="invalid-feedback">{error}</div>}
//             </div>

//             <div className="w-100 d-flex justify-content-center">
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-primary-custom py-2"
//                 disabled={isLoading || !token}
//               >
//                 {isLoading ? (
//                   <>
//                     <span
//                       className="spinner-border spinner-border-sm me-2"
//                       role="status"
//                       aria-hidden="true"
//                     ></span>
//                     Actualizando...
//                   </>
//                 ) : (
//                   "Restablecer contraseña"
//                 )}
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import styles from "./styles.module.css";
import EyeIcon from "../../assets/icons/eye-closed.svg"; 
import EyeOffIcon from "../../assets/icons/eye-open.svg";

const ResetPassword = ({ darkMode }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword1, setShowPassword1 ] = useState(false); 
  const [showPassword2, setShowPassword2 ] = useState(false); 

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const { email, password } = formData;

    if (!email.trim()) {
        newErrors.email = 'Email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email inválido';
    }

    if (!password.trim()) {
        newErrors.password = 'Contraseña es requerida';
    } else if (password.length < 6) {
        newErrors.password = 'Mínimo 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
 };

  useEffect(() => {
    const urlToken = searchParams.get("token");
    console.log("Token en URL:", urlToken);

    if (!urlToken) {
      setError("Token inválido o expirado");
    }

    setToken(urlToken || "");
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!token) {
      setIsLoading(false);
      return setError("Token no válido");
    }

    if (password !== confirmPassword) {
      setIsLoading(false);
      return setError("Las contraseñas no coinciden");
    }

    if (password.length < 6) {
      setIsLoading(false);
      return setError("La contraseña debe tener al menos 6 caracteres");
    }

    try {
      const response = await AuthService.ForgotPassword({
        token,
        password,
        password_confirm: confirmPassword,
      });

      console.log("Respuesta del servidor:", response);

      if (response?.status === 200) {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(response?.data?.message || "Error al resetear la contraseña");
      }

    } catch (err) {
      console.error("Error real en resetPassword:", err);
      setError(err?.response?.data?.message || "Error al resetear la contraseña");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center px-3 mt-5">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <div className="w-100 d-flex justify-content-between align-items-center mb-5">
          <div className="text-center w-100 d-flex justify-content-center">
            <p className="fs-4 fw-bolder m-0 title-section">
              Restablecer contraseña
            </p>
          </div>
        </div>

        {success ? (
          <div className="alert alert-success text-center">
            Contraseña actualizada correctamente. Redirigiendo al login...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            <div className="mb-4 position-relative">
              <input
                type={(showPassword1 || error) ? 'text' : 'password'}
                className={`form-control ${error && 'is-invalid'} ${styles.custom_field}`}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Nueva contraseña"
                required
                minLength="6"
              />
              <span
                onClick={() => setShowPassword1(!showPassword1)}
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: 'pointer' }}
              >
                {
                  !error && (
                    <img
                  src={showPassword1 ? EyeOffIcon : EyeIcon}
                  width={20}
                  alt="toggle-password"
                />
                  )
                }
              </span>
              {error && <div className="invalid-feedback">{error}</div>}
            </div>

            <div className="mb-4 position-relative">
              <input
                type={(showPassword2 || error) ? 'text' : 'password'}
                className={`form-control ${error && 'is-invalid'} ${styles.custom_field}`}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError("");
                }}
                placeholder="Confirmar contraseña"
                required
                minLength="6"
              />
              <span
                onClick={() => setShowPassword2(!showPassword2)}
                className="position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ cursor: 'pointer' }}
              >
                {
                  !error && (
                    <img
                  src={showPassword2 ? EyeOffIcon : EyeIcon}
                  width={20}
                  alt="toggle-password"
                />
                  )
                }
              </span>
              {error && <div className="invalid-feedback">{error}</div>}
            </div>

{/* 
            <div className="mb-4">
              <input
                type="password"
                className={`form-control ${error ? "is-invalid" : ""} ${styles.custom_field}`}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError("");
                }}
                placeholder="Confirmar contraseña"
                required
              />
              {error && <div className="invalid-feedback">{error}</div>}
            </div> */}

            <div className="w-100 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary btn-primary-custom py-2"
                disabled={isLoading || !token}
              >
                {isLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Actualizando...
                  </>
                ) : (
                  "Restablecer contraseña"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;

