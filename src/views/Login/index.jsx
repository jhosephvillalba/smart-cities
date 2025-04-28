import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BlackIcon from "../../assets/icons/back.svg";
import SmartCities from "../../assets/icons/technocorp-black.svg";
import SmartCitiesLigth from "../../assets/icons/technocorp-white.svg";
import EyeIcon from "../../assets/icons/eye-closed.svg";
import EyeOffIcon from "../../assets/icons/eye-open.svg";
import styles from "./styles.module.css";
import AuthService from '../../services/AuthService';

const Login = ({ darkMode, setLoggin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [emailRegister, setEmailRegister] = useState("");
    const [dataUser, setDataUser] = useState("");
    const [showMessage, setShoMessage] = useState(false);

    const navegate = useNavigate();

    const handleRedirect = () => {
        setTimeout(() => navegate('/'), 3000);
    }

    useEffect(() => {
        const emailGuardado = localStorage.getItem('email_register');

        if (emailGuardado) {
            setEmailRegister(emailGuardado);
        } else {
            setEmailRegister("")
        }

    }, []);


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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const result = await AuthService.login(formData);

                console.log({ result })

                if (result.status === 200) {
                    // console.log("Login success");
                    setLoggin(true);
                    setShoMessage(!showMessage);
                    setDataUser(result?.data?.user?.name);
                    handleRedirect();
                }

            } catch (error) {
                console.error("Error en login:", error);
                if (error.response && error.response.status === 401) {
                    setLoginError("Debes verificar tu usuario o contraseña.");
                } else {
                    setLoginError("Ocurrió un error inesperado. Inténtalo más tarde.");
                }
            }
        }
    };

    const handleChange = (field) => (e) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));

        if (errors) {
            setErrors({});
        }
    };

    return (
        <div className="text_section">
            <div className="row justify-content-center">
                {
                    !showMessage ? (
                        <div className="col-md-6">
                            <div className="w-100 d-flex justify-content-between align-items-center mb-5">
                                <div className={`w-100 ${darkMode === true ? styles.inverte : ""}`}>
                                    <Link to="/" className="btn m-0">
                                        <img src={BlackIcon} width={23} alt="back" />
                                    </Link>
                                </div>
                                <div className="text-center w-100 d-flex justify-content-center">
                                    <p className="fs-4 fw-bolder m-0 title-section">Iniciar Sesión</p>
                                </div>
                                <div className="w-100"></div>
                            </div>
                            {loginError && (
                                <div className="alert alert-danger text-center" role="alert">
                                    {loginError}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email && 'is-invalid'} ${styles.custom_field}`}
                                        value={formData.email}
                                        // defaultValue={emailRegister}
                                        placeholder='Correo electrónico'
                                        onChange={handleChange('email')}
                                        required
                                    />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                <div className="mb-4 position-relative">
                                    <input
                                        type={errors.password ? 'text' : (showPassword ? 'text' : 'password')}
                                        className={`form-control ${errors.password ? 'is-invalid' : ''} ${styles.custom_field}`}
                                        value={formData.password}
                                        onChange={handleChange('password')}
                                        placeholder="Contraseña"
                                        required
                                        minLength="6"
                                    />

                                    {!errors.password && (
                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="position-absolute top-50 end-0 translate-middle-y me-3"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <img
                                                src={showPassword ? EyeOffIcon : EyeIcon}
                                                width={20}
                                                alt="toggle-password"
                                            />
                                        </span>
                                    )}

                                    {errors.password && (
                                        <span className="invalid-feedback">{errors.password}</span>
                                    )}
                                </div>


                                <div className="d-flex gap-2 ps-4 mt-3">
                                    <Link to="/forgot-password">¿Resetear contraseña?</Link>
                                </div>

                                <div className="text-start ps-4 mt-4 mb-5">
                                    <Link to={"/sign-in"}>Regístrese para obtener una cuenta</Link>
                                </div>

                                <button type="submit" className="btn btn-primary btn-primary-custom w-100 mt-2 p-2">
                                    INICIAR SESIÓN
                                </button>
                            </form>
                        </div>
                    ) : (
                        <section className={`d-flex justify-content-center align-items-center ${styles.message_section}`}>
                            <div className={`card ${styles.card_message}`}>
                                <div className="card-body">
                                    <p className="card-text text-center">
                                        ¡Bienvenido de nuevo, <b><i>{dataUser}</i></b>! 👋
                                    </p>
                                    <p className="text-center">
                                        Nos alegra tenerte nuevamente en <a href="https://mirionegro.com" target="_blank" className={styles.link}>Mirionegro.com</a>.
                                        Tu sesión se ha iniciado exitosamente.
                                    </p>
                                    <div className="d-flex justify-content-center w-100 mt-4">
                                        <button
                                            className={`btn ${styles.button} ${styles.button_card}`}
                                            onClick={() => navegate('/')}
                                        >
                                            Ir al Inicio
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }

            </div>
            <div className="d-flex justify-content-center w-100 my-lg-1 my-3 justify-content-lg-end p-2">
                <a href="https://www.grupotechnocorp.com/" target='_blank'>
                    {
                        darkMode === true ? <img src={SmartCitiesLigth} width={150} alt="smart-cities" /> : <img src={SmartCities} width={150} alt="smart-cities" />
                    }
                </a>
            </div>
        </div>
    );
};

export default Login;
