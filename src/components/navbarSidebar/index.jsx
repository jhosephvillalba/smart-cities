import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
  // {
  //   id: 1,
  //   name: "Dashboard",
  //   uri: "/dashboard",
  // },
  // {
  //   id: 2,
  //   name: "Agregar Usuario",
  //   uri: "/add-user",
  // },
  // {
  //   id: 3,
  //   name: "Grupo de lideres",
  //   uri: "/group-of-leaders",
  // },
  // {
  //   id: 4,
  //   name: "Reportes",
  //   uri: "/reports",
  // },
  // {
  //   id: 6,
  //   name: "Notificaciones",
  //   uri: "/notifications",
  // },
  {
    id: 7,
    name: "Preguntas Frecuentes",
    uri: "/help",
  },
  {
    id: 8,
    name: "Cobertura Electrovía",
    uri: "/cobertura-electrovia",
  },
];

const NavbarSideBar = () => {
  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a
            href="https://electrovia.live/ElectroVa-Qu-hacemos-2025/index.html"
            _blank="target"
            type="button"
            className="nav-link text-black"
          >
            ¿Que hacemos?
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://electrovia.live"
            _blank="target"
            type="button"
            className="nav-link text-black"
          >
            Soluciones ElectroVía
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://electrovia.live/ElectroVa-Distribuidores-2025/index.html"
            _blank="target"
            type="button"
            className="nav-link text-black"
          >
            Distribuidores ElectroVía
          </a>
        </li>
        {routes.map(({ id, name, uri }) => (
          <li className="nav-item" key={id}>
            <NavLink className="nav-link text-black" to={uri}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavbarSideBar;
