// import React from "react"
// import Styles from "./styles.module.css"
// import SmartCitiesIcon from "../../assets/icons/smart_cities_logo.svg"

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg">
//         <div className="container-fluid">
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>

          // <div className="collapse navbar-collapse" id="navbarSupportedContent">
          //   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          //     <li className="nav-item dropdown">
          //       <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          //         <img className={`${Styles.logo_size}`} src={SmartCitiesIcon} alt="smart-cities"/> 
          //       </a>
          //       <ul className="dropdown-menu">
          //         <li><a className="dropdown-item" href="#">Action</a></li>
          //         <li><a className="dropdown-item" href="#">Another action</a></li>
          //         <li><hr className="dropdown-divider"/></li>
          //         <li><a className="dropdown-item" href="#">Something else here</a></li>
          //       </ul>
          //     </li>
          //   </ul>
          // </div>
//           <div className="d-flex gap-4">
//             <button className="btn btn-primary">
//               INICIAR SESIÓN
//             </button>
//             <button className="btn btn-secondary">
//               SUBSCRÍBETE
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }


// export default Navbar; 

import React from "react";
import Styles from "./styles.module.css";
import SmartCitiesIcon from "../../assets/icons/smart_cities_logo.svg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        {/* Dropdown del logo (Siempre visible) */}
        <div className="dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img className={`${Styles.logo_size}`} src={SmartCitiesIcon} alt="smart-cities" />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>

        {/* Botones */}
        <div className="d-flex gap-2 d-none d-lg-flex w-30 justify-content-end">
          <button className="btn btn-primary py-2">
            <span className="fw-bold">INICIAR SESIÓN</span>
          </button>
          <button className="btn btn-secondary px-3">
            <span className="fw-bold">SUBSCRÍBETE</span>
          </button>
        </div>

        {/* Botón de "INICIAR SESIÓN" en móviles (solo para celulares) */}
        <div className="d-flex d-lg-none w-70 justify-content-end">
          <button className="btn btn-primary py-2">
            <span className="text-bold">INICIAR SESIÓN</span>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
