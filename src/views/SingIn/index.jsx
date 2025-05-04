// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import BlackIcon from "../../assets/icons/back.svg";
// import styles from "./styles.module.css";
// import SmartCities from "../../assets/icons/technocorp-black.svg";
// import SmartCitiesLigth from "../../assets/icons/technocorp-white.svg";
// import AuthService from '../../services/AuthService';
// import MessageRegister from '../../components/MessagesRegister';
// import EyeIcon from "../../assets/icons/eye-closed.svg"; 
// import EyeOffIcon from "../../assets/icons/eye-open.svg";

// const SignIn = ({ darkMode, setLoggin}) => {

//   const [formData, setFormData] = useState({
//     initialData: {
//       nombre: '',
//       apellido: '',
//       email: ''
//     },
//     secondaryData: {
//       contraseña: '',
//       edad: '',
//       telefono: ''
//     }
//   });

//   const [submittedInitial, setSubmittedInitial] = useState(false);
//   const [isRegister, setIsRegister] = useState(true);
//   const [isNewAccunt, setIsNewAccount] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   //No solo debe ser el token 
//   const [registration, setRegistration] = useState(null);
//   const [apiError, setApiError] = useState('');
//   const [showPassword, setShowPassword ] = useState(false); 
//   const [password, setPassword] = useState('');

//   const validateInitialForm = () => {
//     const newErrors = {};
//     const { nombre, apellido, email } = formData.initialData;

//     if (!nombre.trim()) newErrors.nombre = 'Nombre es requerido';
//     if (!apellido.trim()) newErrors.apellido = 'Apellido es requerido';
//     if (!email.trim()) {
//       newErrors.email = 'Email es requerido';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email inválido';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateSecondaryForm = () => {
//     const newErrors = {};
//     const { contraseña, edad, telefono } = formData.secondaryData;

//     if (!contraseña) {
//       newErrors.contraseña = 'Contraseña es requerida';
//     } else if (contraseña.length < 5) {
//       console.log(contraseña.length);
//       newErrors.contraseña = 'La contraseña debe tener al menos 8 caracteres';
//     }
//     // } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(contraseña)) {
//     //   newErrors.contraseña = 'La contraseña debe contener letras y números';
//     // }

//     if (!edad) {
//       newErrors.edad = 'Edad es requerida';
//     } else if (edad < 18 || edad > 100) {
//       newErrors.edad = 'La edad debe estar entre 18 y 100 años';
//     }

//     if (!telefono) {
//       newErrors.telefono = 'Teléfono es requerido';
//     } else if (!/^[0-9]{9,15}$/.test(telefono.replace(/\D/g, ''))) {
//       newErrors.telefono = 'Formato de teléfono inválido';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   //Envio inicial hay que poner una notificacion de algun tipo un modal 

//   const handleInitialSubmit = async (e) => {
//     e.preventDefault();
//     if (validateInitialForm()) {
//       setLoading(true);
//       setApiError('');

//       try {
//         // Llamada al primer paso del registro usando el servicio
//         const response = await AuthService.registerStep1({
//           name: `${formData.initialData.nombre} ${formData.initialData.apellido}`,
//           email: formData.initialData.email
//         });

//         // Guardar el token para el segundo paso
//         setRegistration(response);
//         const { token, ...values } = response;

//         setSubmittedInitial(true); //si es true se muestra el siguiente formulario 
//         setIsRegister(!!token); //si estoy registrado es => false, no registrado => true 

//       } catch (error) {
//         console.error('Error en el primer paso del registro:', error);

//         if (error.response?.data?.detail) {
//           setApiError(error.response.data.detail);
//         } else if (error.response?.status === 400) {
//           setApiError('Este email ya está registrado. Intenta iniciar sesión.');
//         } else {
//           setApiError('Ocurrió un error. Por favor intenta nuevamente.');
//         }
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   //Segundo envio
//   const handleSecondarySubmit = async (e) => {
//     e.preventDefault();
//     if (validateSecondaryForm()) {
//       setLoading(true);
//       setApiError('');

//       try {
//         // Llamada al segundo paso del registro usando el servicio
//         const result = await AuthService.registerStep2({
//           email: formData.initialData.email,
//           token: registration?.token || "",
//           password: formData.secondaryData.contraseña,
//           password_confirm: formData.secondaryData.contraseña
//         });

//         console.log({ result });

//         //setar el token de la respuesta en el local storage 
//         setIsNewAccount(!isNewAccunt); 
//         setLoggin(true); 

//       } catch (error) {
//         console.error('Error en el segundo paso del registro:', error);

//         if (error.response?.data?.detail) {
//           setApiError(error.response.data.detail);
//         } else {
//           setApiError('Ocurrió un error al completar el registro. Por favor intenta nuevamente.');
//         }
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const handleChange = (section, field) => (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [section]: {
//         ...prev[section],
//         [field]: e.target.value
//       }
//     }));
//   };

//   return (
//     <div className="text_section container-lg">
//       <div className="row justify-content-center">
//         <div className="col-md-6">

//           {!submittedInitial ? (

//             <div className='mt-1 d-flex flex-column'>
//               <div className="d-flex justify-content-between align-items-center mb-5">
//                 <div className={`w-100 ${darkMode === true ? styles.inverte : ""}`}>
//                   <Link to="/" className="btn m-0">
//                     <img src={BlackIcon} width={23} alt="back" />
//                   </Link>
//                 </div>
//                 <div className="text-center w-100 d-flex justify-content-center">
//                   <p className="fs-4 fw-bolder m-0">Registrar</p>
//                 </div>
//                 <div className="w-100">
//                 </div>
//               </div>

//               {apiError && (
//                 <div className="alert alert-danger mb-4" role="alert">
//                   {apiError}
//                 </div>
//               )}

//               <form onSubmit={handleInitialSubmit} noValidate>
//                 <div className="mb-4">
//                   <input
//                     type="text"
//                     className={`form-control ${errors.nombre && 'is-invalid'} ${styles.custom_field}`}
//                     value={formData.initialData.nombre}
//                     onChange={handleChange('initialData', 'nombre')}
//                     placeholder='Nombre'
//                     required
//                     disabled={loading}
//                   />
//                   {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
//                 </div>

//                 <div className="mb-4">
//                   <input
//                     type="text"
//                     className={`form-control ${errors.apellido && 'is-invalid'} ${styles.custom_field}`}
//                     value={formData.initialData.apellido}
//                     onChange={handleChange('initialData', 'apellido')}
//                     placeholder='Apellido'
//                     required
//                     disabled={loading}
//                   />
//                   {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
//                 </div>

//                 <div className="mb-4">
//                   <input
//                     type="email"
//                     className={`form-control ${errors.email && 'is-invalid'} ${styles.custom_field}`}
//                     value={formData.initialData.email}
//                     onChange={handleChange('initialData', 'email')}
//                     placeholder='Email'
//                     required
//                     disabled={loading}
//                   />
//                   {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//                 </div>
//                 <div className='mt-4 mb-5'>
//                   <Link to={'/login'}>¿Ya tienes una cuenta?</Link>
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-primary btn-primary-custom w-100 p-2"
//                   disabled={loading}
//                 >
//                   {loading ? 'Cargando...' : 'Unirse'}
//                 </button>
//               </form>
//             </div>

//           ) : submittedInitial && !isRegister ? (<MessageRegister type="cuenta_registrada" name={`${formData.initialData.nombre} ${formData.initialData.apellido}`} />)
//             : submittedInitial && !isNewAccunt ?

//               (

//                 <div className='mt-1 d-flex flex-column gap-3'>
//                   <div className='text-center mb-4'>
//                     <p className="fs-4 fw-bolder">¡Ya casi terminas!</p>
//                   </div>

//                   {apiError && (
//                     <div className="alert alert-danger mb-4" role="alert">
//                       {apiError}
//                     </div>
//                   )}

//                   <form onSubmit={handleSecondarySubmit} noValidate>

//                     {/* <div className="mb-4">
//                   <input
//                     type="password"
//                     className={`form-control ${errors.contraseña && 'is-invalid'} ${styles.custom_field}`}
//                     value={formData.secondaryData.contraseña}
//                     onChange={handleChange('secondaryData', 'contraseña')}
//                     placeholder='Contraseña'
//                     required
//                     minLength="8"
//                     pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
//                     disabled={loading}
//                   />
//                   {errors.contraseña ? (
//                     <div className="invalid-feedback">{errors.contraseña}</div>
//                   ) : (
//                     <div className="form-text">Mínimo 8 caracteres con letras y números</div>
//                   )}
//                 </div> */}

//                     <div className="mb-4 position-relative">
//                       <input
//                         type={showPassword ? 'text' : 'password'}
//                         className={`form-control ${styles.custom_field}`}
//                         value={formData.secondaryData.contraseña}
//                         onChange={handleChange('secondaryData', 'contraseña')}
//                         placeholder="Contraseña"
//                         required
//                         minLength="6"
//                       />
//                       <span
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="position-absolute top-50 end-0 translate-middle-y me-3"
//                         style={{ cursor: 'pointer' }}
//                       >
//                          <img
//                               src={showPassword ? EyeOffIcon : EyeIcon}
//                               width={20}
//                               alt="toggle-password"
//                             />
//                       </span>
//                       {/* {error && <div className="invalid-feedback">{error}</div>} */}
//                     </div>

//                     <div className="mb-4">
//                       <input
//                         type="number"
//                         className={`form-control ${errors.edad && 'is-invalid'} ${styles.custom_field}`}
//                         value={formData.secondaryData.edad}
//                         onChange={handleChange('secondaryData', 'edad')}
//                         required
//                         placeholder='Edad'
//                         min="18"
//                         max="100"
//                         disabled={loading}
//                       />
//                       {errors.edad && <div className="invalid-feedback">{errors.edad}</div>}
//                     </div>

//                     <div className="mb-4">
//                       <input
//                         type="tel"
//                         className={`form-control ${errors.telefono && 'is-invalid'} ${styles.custom_field}`}
//                         value={formData.secondaryData.telefono}
//                         onChange={handleChange('secondaryData', 'telefono')}
//                         required
//                         placeholder="Teléfono Ej: (300)000-0000"
//                         disabled={loading}
//                       />
//                       {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
//                     </div>

//                     <button
//                       type="submit"
//                       className="btn btn-primary btn-primary-custom w-100 mt-4 mb-3 p-3"
//                       disabled={loading}
//                     >
//                       {loading ? 'Cargando...' : 'Completar Registro'}
//                     </button>
//                   </form>
//                 </div>

//               ) : (<MessageRegister type="registro" name={`${formData.initialData.nombre} ${formData.initialData.apellido}`} />)}
//         </div>
//       </div>
//       <div className="d-flex justify-content-center w-100 my-lg-1 my-3 justify-content-lg-end p-2">
//         <a href="https://www.grupotechnocorp.com/" target='_blank' rel="noreferrer">
//           {
//             darkMode === true ? <img src={SmartCitiesLigth} width={150} alt="smart-cities" /> : <img src={SmartCities} width={150} alt="smart-cities" />
//           }
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SignIn;



import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlackIcon from "../../assets/icons/back.svg";
import styles from "./styles.module.css";
import SmartCities from "../../assets/icons/technocorp-black.svg";
import SmartCitiesLigth from "../../assets/icons/technocorp-white.svg";
import AuthService from '../../services/AuthService';
import MessageRegister from '../../components/MessagesRegister';
import EyeIcon from "../../assets/icons/eye-closed.svg"; 
import EyeOffIcon from "../../assets/icons/eye-open.svg";

const SignIn = ({ darkMode, setLoggin }) => {
  const [formData, setFormData] = useState({
    initialData: {
      nombre: '',
      apellido: '',
      email: ''
    },
    secondaryData: {
      contraseña: '',
      edad: '',
      telefono: ''
    }
  });

  const [submittedInitial, setSubmittedInitial] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const [isNewAccunt, setIsNewAccount] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [registration, setRegistration] = useState(null);
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateInitialForm = () => {
    const newErrors = {};
    const { nombre, apellido, email } = formData.initialData;

    if (!nombre.trim()) newErrors.nombre = 'Nombre es requerido';
    if (!apellido.trim()) newErrors.apellido = 'Apellido es requerido';
    if (!email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSecondaryForm = () => {
    const newErrors = {};
    const { contraseña, edad, telefono } = formData.secondaryData;

    if (!contraseña) {
      newErrors.contraseña = 'Contraseña es requerida';
    } else if (contraseña.length < 8) {
      newErrors.contraseña = 'La contraseña debe tener al menos 8 caracteres';
    }

    if (!edad) {
      newErrors.edad = 'Edad es requerida';
    } else if (edad < 18 || edad > 100) {
      newErrors.edad = 'La edad debe estar entre 18 y 100 años';
    }

    if (!telefono) {
      newErrors.telefono = 'Teléfono es requerido';
    } else if (!/^[0-9]{9,15}$/.test(telefono.replace(/\D/g, ''))) {
      newErrors.telefono = 'Formato de teléfono inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInitialSubmit = async (e) => {
    e.preventDefault();
    if (validateInitialForm()) {
      setLoading(true);
      setApiError('');

      try {
        const response = await AuthService.registerStep1({
          name: `${formData.initialData.nombre} ${formData.initialData.apellido}`,
          email: formData.initialData.email
        });

        setRegistration(response);
        const { token } = response;
        setSubmittedInitial(true);
        setIsRegister(!!token);
      } catch (error) {
        console.error('Error en el primer paso del registro:', error);

        if (error.response?.data?.detail) {
          setApiError(error.response.data.detail);
        } else if (error.response?.status === 400) {
          setApiError('Este email ya está registrado. Intenta iniciar sesión.');
        } else {
          setApiError('Ocurrió un error. Por favor intenta nuevamente.');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSecondarySubmit = async (e) => {
    e.preventDefault();

    if (validateSecondaryForm()) {
      setLoading(true);
      setApiError('');

      try {
        const result = await AuthService.registerStep2({
          email: formData.initialData.email,
          token: registration?.token || "",
          password: formData.secondaryData.contraseña,
          password_confirm: formData.secondaryData.contraseña
        });

        setIsNewAccount(!isNewAccunt); 
        setLoggin(true); 
      } catch (error) {
        console.error('Error en el segundo paso del registro:', error);

        if (error.response?.data?.detail) {
          setApiError(error.response.data.detail);
        } else {
          setApiError('Ocurrió un error al completar el registro. Por favor intenta nuevamente.');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (section, field) => (e) => {
    setErrors({}); // Reset errors on submit

    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: e.target.value
      }
    }));
  };

  return (
    <div className="text_section container-lg">
      <div className="row justify-content-center">
        <div className="col-md-6">

          {!submittedInitial ? (
            <div className='mt-1 d-flex flex-column'>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className={`w-100 ${darkMode ? styles.inverte : ""}`}>
                  <Link to="/" className="btn m-0">
                    <img src={BlackIcon} width={23} alt="back" />
                  </Link>
                </div>
                <div className="text-center w-100 d-flex justify-content-center">
                  <p className="fs-4 fw-bolder m-0">Registrar</p>
                </div>
                <div className="w-100"></div>
              </div>

              {apiError && (
                <div className="alert alert-danger mb-4" role="alert">
                  {apiError}
                </div>
              )}

              <form onSubmit={handleInitialSubmit} noValidate>
                <div className="mb-4">
                  <input
                    type="text"
                    className={`form-control ${errors.nombre && 'is-invalid'} ${styles.custom_field}`}
                    value={formData.initialData.nombre}
                    onChange={handleChange('initialData', 'nombre')}
                    placeholder='Nombre'
                    required
                    disabled={loading}
                  />
                  {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    className={`form-control ${errors.apellido && 'is-invalid'} ${styles.custom_field}`}
                    value={formData.initialData.apellido}
                    onChange={handleChange('initialData', 'apellido')}
                    placeholder='Apellido'
                    required
                    disabled={loading}
                  />
                  {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    className={`form-control ${errors.email && 'is-invalid'} ${styles.custom_field}`}
                    value={formData.initialData.email}
                    onChange={handleChange('initialData', 'email')}
                    placeholder='Email'
                    required
                    disabled={loading}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className='mt-4 mb-5'>
                  <Link to={'/login'}>¿Ya tienes una cuenta?</Link>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-primary-custom w-100 p-2"
                  disabled={loading}
                >
                  {loading ? 'Cargando...' : 'Unirse'}
                </button>
              </form>
            </div>

          ) : submittedInitial && !isRegister ? (
            <MessageRegister type="cuenta_registrada" name={`${formData.initialData.nombre} ${formData.initialData.apellido}`} />
          ) : !isNewAccunt ? (
            <div className='mt-1 d-flex flex-column gap-3'>
              <div className='text-center mb-4'>
                <p className="fs-4 fw-bolder">¡Ya casi terminas!</p>
              </div>

              {apiError && (
                <div className="alert alert-danger mb-4" role="alert">
                  {apiError}
                </div>
              )}

              <form onSubmit={handleSecondarySubmit} noValidate>
                <div className="mb-4 position-relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={`form-control ${errors.contraseña && 'is-invalid'} ${styles.custom_field}`}
                    value={formData.secondaryData.contraseña}
                    onChange={handleChange('secondaryData', 'contraseña')}
                    placeholder="Contraseña"
                    required
                    minLength="8"
                    disabled={loading}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: 'pointer' }}
                  >
                    <img style={{ display: errors.contraseña ? 'none' : 'block' }}
                      src={showPassword ? EyeOffIcon : EyeIcon}
                      width={20}
                      alt="toggle-password"
                    />
                  </span>
                  {errors.contraseña && <div className="invalid-feedback">{errors.contraseña}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="number"
                    className={`form-control ${errors.edad && 'is-invalid'} ${styles.custom_field}`}
                    value={formData.secondaryData.edad}
                    onChange={handleChange('secondaryData', 'edad')}
                    required
                    placeholder='Edad'
                    min="18"
                    max="100"
                    disabled={loading}
                  />
                  {errors.edad && <div className="invalid-feedback">{errors.edad}</div>}
                </div>

                <div className="mb-4">
                  <input
                    type="tel"
                    className={`form-control ${errors.telefono && 'is-invalid'} ${styles.custom_field}`}
                    value={formData.secondaryData.telefono}
                    onChange={handleChange('secondaryData', 'telefono')}
                    required
                    placeholder="Teléfono Ej: (300)000-0000"
                    disabled={loading}
                  />
                  {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-primary-custom w-100 mt-4 mb-3 p-3"
                  disabled={loading}
                >
                  {loading ? 'Cargando...' : 'Completar Registro'}
                </button>
              </form>
            </div>
          ) : (
            <MessageRegister type="registro" name={`${formData.initialData.nombre} ${formData.initialData.apellido}`} />
          )}
        </div>
      </div>

      <div className="d-flex justify-content-center w-100 my-lg-1 my-3 justify-content-lg-end p-2">
        <a href="https://www.grupotechnocorp.com/" target='_blank' rel="noreferrer">
          {darkMode ? (
            <img src={SmartCitiesLigth} width={150} alt="smart-cities" />
          ) : (
            <img src={SmartCities} width={150} alt="smart-cities" />
          )}
        </a>
      </div>
    </div>
  );
};

export default SignIn;
