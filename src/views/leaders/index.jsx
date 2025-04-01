import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import SearchIconLupe from "../../assets/icons/search-lupe.svg"
import LeaderCard from "../../components/leadersCard";
import AsociateUserCard from "../../components/AsociateUserCard";

const teams = [
  {
    id: 1,
    leader: "Juan Pérez",
    document: "123456789",
    email: "juan.perez@example.com",
    totalUsers: 5,
    users: [
      { userName: "Luis García", document: "111222333", email: "luis.garcia@example.com" },
      { userName: "Marta Ríos", document: "444555666", email: "marta.rios@example.com" },
      { userName: "Pedro Sánchez", document: "777888999", email: "pedro.sanchez@example.com" },
      { userName: "Lucía Fernández", document: "101112131", email: "lucia.fernandez@example.com" },
      { userName: "Diego Castro", document: "141516171", email: "diego.castro@example.com" }
    ]
  },
  {
    id: 2,
    leader: "María González",
    document: "987654321",
    email: "maria.gonzalez@example.com",
    totalUsers: 7,
    users: [
      { userName: "Andrea López", document: "121314151", email: "andrea.lopez@example.com" },
      { userName: "Carlos Romero", document: "161718191", email: "carlos.romero@example.com" },
      { userName: "Gabriela Soto", document: "202122232", email: "gabriela.soto@example.com" },
      { userName: "Héctor Vega", document: "242526272", email: "hector.vega@example.com" },
      { userName: "Patricia Navarro", document: "282930313", email: "patricia.navarro@example.com" },
      { userName: "Sofía Medina", document: "323334353", email: "sofia.medina@example.com" },
      { userName: "Ricardo Molina", document: "363738393", email: "ricardo.molina@example.com" }
    ]
  },
  {
    id: 3,
    leader: "Carlos López",
    document: "456789123",
    email: "carlos.lopez@example.com",
    totalUsers: 4,
    users: [
      { userName: "Elena Vargas", document: "404142434", email: "elena.vargas@example.com" },
      { userName: "Daniel Pérez", document: "444546474", email: "daniel.perez@example.com" },
      { userName: "Oscar Ramírez", document: "484950515", email: "oscar.ramirez@example.com" },
      { userName: "Valeria Guzmán", document: "525354555", email: "valeria.guzman@example.com" }
    ]
  },
  {
    id: 4,
    leader: "Ana Ramírez",
    document: "321654987",
    email: "ana.ramirez@example.com",
    totalUsers: 6,
    users: [
      { userName: "Fernando Torres", document: "565758595", email: "fernando.torres@example.com" },
      { userName: "Daniela Flores", document: "606162636", email: "daniela.flores@example.com" },
      { userName: "Javier Herrera", document: "646566676", email: "javier.herrera@example.com" },
      { userName: "Luisa Méndez", document: "686970717", email: "luisa.mendez@example.com" },
      { userName: "Pedro Paredes", document: "727374757", email: "pedro.paredes@example.com" },
      { userName: "Laura Castro", document: "767778797", email: "laura.castro@example.com" }
    ]
  },
  {
    id: 5,
    leader: "Pedro Fernández",
    document: "654987321",
    email: "pedro.fernandez@example.com",
    totalUsers: 7,
    users: [
      { userName: "Julieta Sánchez", document: "808182838", email: "julieta.sanchez@example.com" },
      { userName: "Roberto Vargas", document: "848586878", email: "roberto.vargas@example.com" },
      { userName: "Esteban Molina", document: "888990919", email: "esteban.molina@example.com" },
      { userName: "Isabel Ríos", document: "929394959", email: "isabel.rios@example.com" },
      { userName: "Alberto Guzmán", document: "969798999", email: "alberto.guzman@example.com" },
      { userName: "Carmen Vega", document: "100101102", email: "carmen.vega@example.com" },
      { userName: "Emilio Navarro", document: "103104105", email: "emilio.navarro@example.com" }
    ]
  },
  {
    id: 6,
    leader: "Laura Herrera",
    document: "741852963",
    email: "laura.herrera@example.com",
    totalUsers: 3,
    users: [
      { userName: "Marcelo Ortiz", document: "106107108", email: "marcelo.ortiz@example.com" },
      { userName: "Patricia Ramos", document: "109110111", email: "patricia.ramos@example.com" },
      { userName: "Diego Silva", document: "112113114", email: "diego.silva@example.com" }
    ]
  },
  {
    id: 7,
    leader: "Diego Castro",
    document: "369258147",
    email: "diego.castro@example.com",
    totalUsers: 5,
    users: [
      { userName: "Adriana Mendoza", document: "115116117", email: "adriana.mendoza@example.com" },
      { userName: "Jorge Fernández", document: "118119120", email: "jorge.fernandez@example.com" },
      { userName: "Natalia Romero", document: "121122123", email: "natalia.romero@example.com" },
      { userName: "César Pacheco", document: "124125126", email: "cesar.pacheco@example.com" },
      { userName: "Rodrigo Torres", document: "127128129", email: "rodrigo.torres@example.com" }
    ]
  },
  {
    id: 8,
    leader: "Sofía Medina",
    document: "852741963",
    email: "sofia.medina@example.com",
    totalUsers: 7,
    users: [
      { userName: "Tatiana Rojas", document: "130131132", email: "tatiana.rojas@example.com" },
      { userName: "Federico Pérez", document: "133134135", email: "federico.perez@example.com" },
      { userName: "Lorena Castro", document: "136137138", email: "lorena.castro@example.com" },
      { userName: "Samuel Hernández", document: "139140141", email: "samuel.hernandez@example.com" },
      { userName: "Julia Vargas", document: "142143144", email: "julia.vargas@example.com" },
      { userName: "Luis Ríos", document: "145146147", email: "luis.rios@example.com" },
      { userName: "Cecilia Navarro", document: "148149150", email: "cecilia.navarro@example.com" }
    ]
  },
  {
    id: 9,
    leader: "Javier Ortiz",
    document: "159753486",
    email: "javier.ortiz@example.com",
    totalUsers: 2,
    users: [
      { userName: "Silvana Guzmán", document: "151152153", email: "silvana.guzman@example.com" },
      { userName: "Mauricio Ramos", document: "154155156", email: "mauricio.ramos@example.com" }
    ]
  },
  {
    id: 10,
    leader: "Patricia Ríos",
    document: "753951852",
    email: "patricia.rios@example.com",
    totalUsers: 4,
    users: [
      { userName: "Raúl Herrera", document: "157158159", email: "raul.herrera@example.com" },
      { userName: "Beatriz Paredes", document: "160161162", email: "beatriz.paredes@example.com" },
      { userName: "Nelson Vega", document: "163164165", email: "nelson.vega@example.com" },
      { userName: "Camila López", document: "166167168", email: "camila.lopez@example.com" }
    ]
  }
];


const Leaders = () => {

  const [data, setData] = useState(teams)
  const [ isSelected, setIsSelected ] = useState(false); 
  
  const handlerData = () => {

  }

  return (
    <>
      <div className="container">
        <p className={`${styles.title_section} h6`}>Grupo de líderes</p>
        <div className={` ${styles.container} p-5`}>
          <div className={`row mb-3`}>
            <div className={`col-5`}>
              <div className="input-group m-0">
                <input type="text" className={`form-control ${styles.input_custon_styles}`} placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2" />
                <button className={`btn btn-outline-secondary ${styles.button_custon_styles}`} type="button" id="button-addon2">
                  <img src={SearchIconLupe} alt="search-icon" />
                </button>
              </div>
            </div>
          </div>
          <div className={`row g-3`}>
            <div className={`col-5 p-0`}>
              <p className="fw-bolder">Líderes</p>
              <div className={`${styles.data_container} pe-4`}>
                <div className="d-flex flex-column gap-3">
                  {data.map(({ id, leader, document, email, totalUsers }) => (
                    <LeaderCard
                      key={id}
                      leader={leader}
                      document={document}
                      email={email}
                      totalUsers={totalUsers}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={`col-5`}>
              <p className="fw-bolder">Usuarios</p>
              <div className={`${styles.data_container} pe-4`}>
                <div className="d-flex flex-column gap-3">
                  {data.map(({ id, leader, document, email, totalUsers }) => (
                    <LeaderCard
                      key={id}
                      leader={leader}
                      document={document}
                      email={email}
                      totalUsers={totalUsers}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaders;
