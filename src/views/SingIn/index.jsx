import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlackIcon from "../../assets/icons/back.svg";
import styles from "./styles.module.css";
import SmartCities from "../../assets/icons/smart-cities.svg"

const SignIn = () => {
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
  const [errors, setErrors] = useState({});

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

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    if (validateInitialForm()) {
      setSubmittedInitial(true);
      // Aquí iría la llamada al backend para enviar los datos iniciales
    }
  };

  const handleSecondarySubmit = (e) => {
    e.preventDefault();
    // Validar y enviar datos secundarios
    console.log('Datos completos:', formData);
    // Aquí iría la llamada al backend para enviar todos los datos
  };

  const handleChange = (section, field) => (e) => {
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
              <div className="w-100 d-flex justify-content-between align-items-center mb-5">
                <div className="w-100">
                  <Link to="/" className="btn m-0">
                    <img src={BlackIcon} width={23} alt="back" />
                  </Link>
                </div>
                <div className="text-center w-100 d-flex justify-content-center">
                  <p className="fs-4 fw-bolder m-0">Registrar</p>
                </div>
                <div className="w-100">
                </div>
              </div>

              <form onSubmit={handleInitialSubmit} noValidate>


                <div className="mb-4">
                  {/* <label className="form-label">Nombre</label> */}
                  <input
                    type="text"
                    className={`form-control ${errors.nombre && 'is-invalid'} ${styles.custom_field}`}
                    value={formData.initialData.nombre}
                    onChange={handleChange('initialData', 'nombre')}
                    placeholder='Nombre'
                    required
                  />
                  {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                </div>

                <div className="mb-4">
                  {/* <label className="form-label">Apellido</label> */}
                  <input
                    type="text"
                    className={`form-control ${errors.apellido && 'is-invalid'} ${styles.custom_field}`}
                    value={formData.initialData.apellido}
                    onChange={handleChange('initialData', 'apellido')}
                    placeholder='Apellido'
                    required
                  />
                  {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
                </div>

                <div className="mb-4">
                  {/* <label className="form-label">Correo electrónico</label> */}
                  <input
                    type="email"
                    className={`form-control ${errors.email && 'is-invalid'} ${styles.custom_field}`}
                    value={formData.initialData.email}
                    onChange={handleChange('initialData', 'email')}
                    placeholder='Email'
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className='mt-4 mb-5'>
                  <Link to={'/login'}>¿Ya tienes una cuenta?</Link>
                </div>
                <button type="submit" className="btn btn-primary btn-primary-custom w-100 p-2">Unirse</button>
              </form>
            </div>

          ) : (
            <div className='mt-1 d-flex flex-column gap-3'>
              <div className='text-center mb-4'>
                <p className="fs-4 fw-bolder">¡Ya casi terminas!</p>
              </div>
              <form onSubmit={handleSecondarySubmit} noValidate>

                <div className="mb-4">
                  {/* <label className="form-label"></label> */}
                  <input
                    type="password"
                    className={`form-control ${styles.custom_field}`}
                    value={formData.secondaryData.contraseña}
                    onChange={handleChange('secondaryData', 'contraseña')}
                    placeholder='Contraseña'
                    required
                    minLength="8"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                  />
                  <div className="form-text">Mínimo 8 caracteres con letras y números</div>
                </div>

                <div className="mb-4">
                  {/* <label className="form-label">Edad</label> */}
                  <input
                    type="number"
                    className={`form-control ${styles.custom_field}`}
                    value={formData.secondaryData.edad}
                    onChange={handleChange('secondaryData', 'edad')}
                    required
                    placeholder='Edad'
                    min="18"
                    max="100"
                  />
                </div>

                <div className="mb-4">
                  {/* <label className="form-label"></label> */}
                  <input
                    type="tel"
                    className={`form-control ${styles.custom_field}`}
                    value={formData.secondaryData.telefono}
                    onChange={handleChange('secondaryData', 'telefono')}
                    required
                    pattern="[0-9]{9,15}"
                    placeholder="Teléfono Ej: (300)000-0000"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-primary-custom w-100 mt-4 mb-3 p-3">Completar Registro</button>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center w-100 my-lg-1 my-3 justify-content-lg-end p-2">
        <a href="https://eso.gov.co/" target='_blank'>
          <img src={SmartCities} width={150} alt="smart-cities" />
        </a>
      </div>
    </div>
  );
};

export default SignIn;