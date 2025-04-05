import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlackIcon from "../../assets/icons/back.svg"; 
import SmartCities from "../../assets/icons/smart-cities.svg"; 
import styles from "./styles.module.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Aquí iría la llamada al backend para autenticar
            console.log('Datos válidos:', formData);
        }
    };

    const handleChange = (field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    return (
        <div className="container-lg text_section">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="w-100 d-flex justify-content-between align-items-center mb-5">
                        <div className="w-100">
                            <Link to="/" className="btn m-0">
                                <img src={BlackIcon} width={23} alt="back" />
                            </Link>
                        </div>
                        <div className="text-center w-100 d-flex justify-content-center">
                            <p className="fs-4 fw-bolder m-0 title-section">Iniciar Sesión</p>
                        </div>
                        <div className="w-100">
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            {/* <label className="form-label">Correo electrónico</label> */}
                            <input
                                type="email"
                                className={`form-control ${errors.email && 'is-invalid'} ${styles.custom_field}`}
                                value={formData.email}
                                placeholder='Correo electrónico'
                                onChange={handleChange('email')}
                                required
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <div className="mb-4">
                            {/* <label className="form-label">Contraseña</label> */}
                            <input
                                type="password"
                                className={`form-control ${errors.password && 'is-invalid'} ${styles.custom_field}`}
                                value={formData.password}
                                onChange={handleChange('password')}
                                placeholder='Contraseña'
                                required
                                minLength="6"
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        <div className="d-flex gap-2 ps-4 mt-3">
                            <Link to="/">
                              ¿Resetear contraseña?
                            </Link> <p>|</p>

                            <Link to="/">
                              Privacidad
                            </Link>
                        </div>
                        
                        <div className="text-start ps-4 mt-4 mb-5">
                            <Link to={"/sign-in"}>
                                Regístrese para obtener una cuenta
                            </Link>
                        </div>


                        <button type="submit" className="btn btn-primary btn-primary-custom w-100 mt-2 p-2">
                            INICIAR SESIÓN
                        </button>
                    </form>
                </div>
            </div>
                <div className="d-flex justify-content-center w-100 my-lg-1 my-3 justify-content-lg-end p-2">
                    <img src={SmartCities} width={150} alt="smart-cities" />
                  </div>

        </div>
    );
};

export default Login;