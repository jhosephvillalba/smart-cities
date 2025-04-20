import React, { useState, useEffect, use } from "react";
import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
//icons
import IconExplore from "./assets/icons/explore-btn-smart.svg";
import IconLoupe from "./assets/icons/icon-loupe.svg";
import IconOdinIa from "./assets/icons/btn-logo-smart.svg";
import IconOdin from "./assets/icons/icon-odinia.svg";

import IconPencilBlack from "./assets/icons/icon-pencil-black.svg";

// import IconStar from "./assets/icons/start-smart.svg";
import IconSwitchBlack from "./assets/icons/icon-switch-black.svg";

import LogoWhite from "./assets/icons/rionegro-logo-black.svg";
import LogoWhite2 from "./assets/icons/rionegro-logo-white.svg"

import PensilAndNoteBook from "./assets/icons/pencil-and-notepack.svg";
import PensilAndNoteBook2 from "./assets/icons/tableta-lapiz-negro.svg";
import NavbarSideBar from "./components/navbarSidebar";


import AddUser from "./views/user";
import RegisterUser from "./views/user/register";
import Leaders from "./views/leaders";
import Reports from "./views/reports";
import Notifications from "./views/Notifications";
import Help from "./views/help";
import OdinIa from "./views/OdinIa";
import SingIn from "./views/SingIn";
import Login from "./views/Login";

import "./App.css";
import ForgotPassword from "./views/ForgotPassword";
import ResetPassword from "./views/ResetPassword";
import VerifyEmail from "./views/VerifyEmail";
import AuthService from "./services/AuthService";
// import { useNavigate } from "react-router-dom";



const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dataUser, setDataUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthToken = async () => {
      try {
        
        const token = localStorage.getItem('accessToken');

        if (token) {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;

          if (decodedToken.exp < currentTime) {
            AuthService.logout();
          } else {
            let currentUser = await AuthService.getCurrentUser();

            // Separar el nombre en palabras, limpiar espacios, eliminar vacíos
            let works = currentUser?.name
              ?.split(" ")
              .map(e => e.trim())
              .filter(e => e !== "");

            // console.log({ works });

            // Obtener iniciales de la primera y segunda palabra
            let initials = "";
            if (works.length >= 2) {
              initials = `${works[0][0]}${works[1][0]}`;
            } else if (works.length === 1) {
              initials = `${works[0][0]}${works[0][0]}`; // Si sólo hay un nombre, duplicamos la inicial
            }

            setDataUser({ initials: initials.toUpperCase(), ...currentUser });
            setLoggedIn(true); 

            //setear el estado de dark del localStorage
            // const darkMode = localStorage.getItem('darkMode');
            // setDarkMode(darkMode); 
          }

        }

        

      } catch (error) {
        console.error('Error verificando el token:', error);
        AuthService.logout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthToken();


  }, [loggedIn]);

  const handlerDarkMode = () => {
    setDarkMode(!darkMode);
    // localStorage.setItem("darkMode", darkMode); 
  };

  const handleOffcanvasClick = (e) => {
    const tag = e.target.tagName.toLowerCase();

    console.log(tag)
    // Si clickeó un botón o un link dentro del offcanvas
    if (tag === 'button' || tag === 'a') {
      setTimeout(() => {
        const el = document.getElementById("offcanvasExample");
        console.log(el)
        const instance = window.bootstrap?.Offcanvas.getInstance(el);
        instance?.hide();
      }, 50); // Le damos tiempo a que ejecute la acción (como navegar)
    }
  };

  const handleLogout = () => {
    AuthService.logout();
    setLoggedIn(!loggedIn);
    navigate('/login');
  };


  return (
    <>
      <main className="main-container vh-lg-100 d-flex">
        {/* ----------------------------aside------------------------------- */}
        <aside className="menu pt-1 ps-3 pb-3 h-100 w-100 d-none d-lg-block">
          <div className="menu__header d-flex flex-row justify-content-between pt-2 pe-2">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img src={IconSwitchBlack} alt="" />
            </button>

            <div className="d-flex flex-row">
              <button type="button" className="btn btn-light">
                <img className="logo-header" src={IconPencilBlack} alt="" />
              </button>
              <button type="button" className="btn btn-light">
                <img src={IconLoupe} alt="" />
              </button>
            </div>
          </div>
          <div className="menu__content d-flex flex-column justify-content-between mt-4 pe-3">
            <div className="menu__item d-flex flex-column">
              <a
                type="button"
                href="https://rionegro.gov.co/"
                target="_blank"
                className="btn btn-light d-flex flex-row align-items-center"
              >
                <img src={IconOdinIa} alt="" />
                <span className="ms-2">Alcaldia de Rionegro</span>
              </a>
              <Link to="/"
                type="button"
                className="btn btn-light d-flex flex-row align-items-center"
              >
                <img src={IconExplore} alt="" />
                <span className="ms-2">Explorar OdinIA</span>
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <NavbarSideBar />
            </div>



            {/* ----------------- */}


            <div className="menu__item d-flex flex-column">
              {!loggedIn ? (
                <>
                  <Link to="/login" className="btn btn-primary btn-primary-custom mb-3">
                    INICIAR SESIÓN
                  </Link>
                  <Link to="/sign-in" className="btn btn-primary btn-primary-custom">
                    REGISTRARSE
                  </Link>
                </>
              ) : (
                <button onClick={handleLogout} className="btn btn-danger btn-primary-custom">
                  CERRAR SESIÓN
                </button>)}
            </div>
            {/* ----------------- */}

          </div>
        </aside>
        {/* ----------------------------aside------------------------------- */}
        <aside
          className={`offcanvas offcanvas-start d-lg-none w-offcanva`}
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          onClick={(e) => handleOffcanvasClick(e)}
        >
          <div className="offcanvas-header">
            {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5> */}
            {/* <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}

            {/* ----------------------------------------------------------------- */}
            <div className="menu__header d-flex flex-row justify-content-between pt-2 pe-2 w-100">
              <button
                type="button" className="btn text-reset" aria-label="Close"

              >
                <img src={IconSwitchBlack} alt="" />
              </button>

              <div className="d-flex flex-row">
                <button type="button" className="btn btn-light">
                  <img src={IconPencilBlack} alt="" />
                </button>
                <button type="button" className="btn btn-light">
                  <img src={IconLoupe} alt="" />
                </button>
              </div>
            </div>
            {/* ---------------------------------------------------- */}

          </div>
          <div className="offcanvas-body">
            <div className="menu__content d-flex flex-column justify-content-between mt-4 pe-3">
              <div className="menu__item d-flex flex-column">
                <a
                  href="https://rionegro.gov.co/"
                  target="_blank"
                  type="button"
                  className="btn btn-light d-flex flex-row align-items-center p-1 text-start w-max-content"

                >
                  <img src={IconOdinIa} alt="" />
                  <span className="ms-2">Alcaldia de Rionegro</span>
                </a>
                <Link to="/"
                  type="button"
                  className="btn btn-light d-flex flex-row align-items-center p-1 mt-2 ps-2"

                >
                  <img src={IconExplore} alt="" className="me-2" />
                  Explorar OdinIA
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                {/* <NavbarSideBar /> */}
                <Link to="/help"
                  type="button"
                  className="btn btn-light d-flex flex-row align-items-center p-1 mt-2 text-start w-max-content"
                >
                  Preguntas Frecuentes
                </Link>
              </div>
              <div className="menu__item d-flex flex-column">
                {!loggedIn ? (
                  <>
                    <Link to="/login" className="btn btn-primary btn-primary-custom mb-3">
                      INICIAR SESIÓN
                    </Link>
                    <Link to="/sign-in" className="btn btn-primary btn-primary-custom">
                      REGISTRARSE
                    </Link>
                  </>
                ) : (
                  <button onClick={handleLogout} className="btn btn-danger btn-primary-custom">
                    CERRAR SESIÓN
                  </button>)}
              </div>
            </div>
          </div>
        </aside>

        <div className={`content h-100 w-lg-100 ${showMenu ? "width-complete" : ""} ${darkMode ? "" : "background-content"}`}>
          <header className="navbar bg-body-tertiary">
            <nav className="container-fluid px-3 dropdown">
              <a className="nav-link btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                {
                  darkMode == true ? (<img src={PensilAndNoteBook} style={{ width: "30px" }} alt="OdinIa" />) : (<img src={PensilAndNoteBook2} style={{ width: "30px" }} alt="OdinIa" />)
                }
              </a>
              <a
                className={`nav-link ${darkMode === true ? "dropdown-toggle-2" : "dropdown-toggle"}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {
                  darkMode == true ? (<img src={LogoWhite2} alt="logo" />) : (<img src={LogoWhite} alt="logo" />)
                }
              </a>
              <ul className="dropdown-menu ms-3">
                <li>
                  <NavLink className="dropdown-item text-black " to="/">
                    OdinIA Plus
                  </NavLink>
                </li>
                {/* <li>
                    <a className="dropdown-item text-black" href="#">
                      OdinIA
                    </a>
                  </li> */}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="d-none d-lg-block"> {/* Esta línea cambia */}
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    Menú
                  </a>
                </li>
              </ul>

              <div className="dropdown">
                <div
                  className="profile d-flex justify-content-center align-items-center dropdown-toggle-custom-account"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#0d6efd',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  {!loggedIn ? (
                    <img src={IconOdin} alt="odinIa" />
                  ) : (
                    <span>{dataUser?.initials}</span>)}

                </div>
                <ul className="dropdown-menu dropdown-menu-end" style={{ marginTop: '10px' }}>
                  {
                    !loggedIn ? (
                      <>
                        <li>
                          <Link className="dropdown-item" to="/sign-in">
                            <i className="bi bi-person-plus me-2"></i>Registrarse
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/login">
                            <i className="bi bi-box-arrow-in-right me-2"></i>Iniciar Sesión
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <p className="btn dropdown-item">
                            <span className="bi bi-box-arrow-in-right me-2" style={{ fontSize: "0.9rem" }}><b><i>{dataUser?.name}</i></b></span>
                          </p>
                        </li>
                        <li>
                          <button className="btn dropdown-item" onClick={handleLogout}>
                            <span className="bi bi-box-arrow-in-right me-2">Cerrar Sesión</span>
                          </button>
                        </li>
                      </>
                    )
                  }
                </ul>
              </div>

            </nav>
          </header>
          <div className={`container-fluid d-flex flex-column wrapper-content align-items-between`}>
            {/* <ViewChat handlerDarkMode={handlerDarkMode} darkStatus={darkMode} /> */}
            <Routes>
              <Route path="/" element={<OdinIa handlerDarkMode={handlerDarkMode} darkStatus={darkMode} />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/add-user/register" element={<RegisterUser />} />
              <Route path="/group-of-leaders" element={<Leaders />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/help" element={<Help darkMode={darkMode} />} />
              <Route path="/sign-in" element={<SingIn darkMode={darkMode} setLoggin={setLoggedIn} />} />
              <Route path="/login" element={<Login darkMode={darkMode} setLoggin={setLoggedIn} />} />
              <Route path="/forgot-password" element={<ForgotPassword darkMode={darkMode} />} />
              <Route path="/reset-password" element={<ResetPassword darkMode={darkMode} />} />
              <Route path="/verify-email" element={<VerifyEmail darkMode={darkMode} />} />

            </Routes>
            <footer className="global-footer mt-1">
              <div className="d-flex flex-column justify-content-center">
                <p className="text-center" style={{ fontSize: "12px" }}>Al enviar un mensaje a OdinIA, aceptas nuestros <a href="#">Términos</a> y reconoces que leíste nuestra <a href="#">Política de privacidad.</a></p>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;



