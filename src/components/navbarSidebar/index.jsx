import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
  {
    id: 1,
    name: "Dashboard",
    uri: "/dashboard",
  },
  {
    id: 2,
    name: "Agregar Usuario",
    uri: "/add-user",
  },
  {
    id: 3,
    name: "Grupo de lideres",
    uri: "/group-of-leaders",
  },
  {
    id: 4,
    name: "Reportes",
    uri: "/reports",
  },
  {
    id: 6,
    name: "Notificaciones",
    uri: "/notifications",
  },
  {
    id: 7,
    name: "Ayuda",
    uri: "/help",
  },
  {
    id: 9,
    name: "Zonificación",
    uri: "/zoning",
  },
];

const NavbarSideBar = () => {
  return (
    <>
      <ul className="nav flex-column">
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
