import React from "react";
import styles from "./styles.module.css";
import ReportFilterBar from "../../components/ReportFilterBar";


const usuarios = [
    {
      id: 1,
      nombre: "Juan Pérez",
      telefono: "601234567",
      cel: "3001234567",
      direccion: "Calle 123 #45-67",
      barrio: "Centro"
    },
    {
      id: 2,
      nombre: "María Gómez",
      telefono: "602345678",
      cel: "3102345678",
      direccion: "Carrera 50 #10-20",
      barrio: "San Fernando"
    },
    {
      id: 3,
      nombre: "Carlos Rodríguez",
      telefono: "603456789",
      cel: "3203456789",
      direccion: "Avenida Siempre Viva 742",
      barrio: "Las Lomas"
    },
    {
      id: 4,
      nombre: "Ana Martínez",
      telefono: "604567890",
      cel: "3504567890",
      direccion: "Diagonal 80 #22-33",
      barrio: "Chapinero"
    },
    {
      id: 5,
      nombre: "Pedro Sánchez",
      telefono: "605678901",
      cel: "3155678901",
      direccion: "Transversal 30 #15-40",
      barrio: "El Poblado"
    },
    {
      id: 6,
      nombre: "Laura Fernández",
      telefono: "606789012",
      cel: "3226789012",
      direccion: "Calle 8 #12-34",
      barrio: "La Floresta"
    },
    {
      id: 7,
      nombre: "David Ramírez",
      telefono: "607890123",
      cel: "3117890123",
      direccion: "Carrera 15 #20-50",
      barrio: "Santa Fe"
    },
    {
      id: 8,
      nombre: "Patricia López",
      telefono: "608901234",
      cel: "3208901234",
      direccion: "Avenida 5 #67-89",
      barrio: "Las Américas"
    },
    {
      id: 9,
      nombre: "Jorge Torres",
      telefono: "609012345",
      cel: "3019012345",
      direccion: "Calle 30 #10-15",
      barrio: "Normandía"
    },
    {
      id: 10,
      nombre: "Sofía Vargas",
      telefono: "610123456",
      cel: "3041234567",
      direccion: "Diagonal 55 #22-44",
      barrio: "Santa Mónica"
    },
    {
      id: 11,
      nombre: "Ricardo Castillo",
      telefono: "611234567",
      cel: "3122345678",
      direccion: "Carrera 40 #30-60",
      barrio: "Alameda"
    },
    {
      id: 12,
      nombre: "Tatiana Mendoza",
      telefono: "612345678",
      cel: "3163456789",
      direccion: "Transversal 10 #5-20",
      barrio: "Los Alpes"
    },
    {
      id: 13,
      nombre: "Fernando Herrera",
      telefono: "613456789",
      cel: "3224567890",
      direccion: "Calle 80 #30-70",
      barrio: "San Isidro"
    },
    {
      id: 14,
      nombre: "Natalia Paredes",
      telefono: "614567890",
      cel: "3155678901",
      direccion: "Carrera 25 #15-35",
      barrio: "Prado Centro"
    },
    {
      id: 15,
      nombre: "Esteban Ríos",
      telefono: "615678901",
      cel: "3106789012",
      direccion: "Avenida 3 #55-80",
      barrio: "San Antonio"
    },
    {
      id: 16,
      nombre: "Lucía Navarro",
      telefono: "616789012",
      cel: "3057890123",
      direccion: "Calle 9 #12-34",
      barrio: "La Merced"
    },
    {
      id: 17,
      nombre: "Roberto Vega",
      telefono: "617890123",
      cel: "3198901234",
      direccion: "Diagonal 15 #22-45",
      barrio: "El Prado"
    },
    {
      id: 18,
      nombre: "Daniela Castro",
      telefono: "618901234",
      cel: "3019012345",
      direccion: "Carrera 18 #10-25",
      barrio: "La Candelaria"
    },
    {
      id: 19,
      nombre: "Gustavo Molina",
      telefono: "619012345",
      cel: "3200123456",
      direccion: "Transversal 7 #15-40",
      barrio: "Belén"
    },
    {
      id: 20,
      nombre: "Mónica Fuentes",
      telefono: "620123456",
      cel: "3171234567",
      direccion: "Calle 100 #30-50",
      barrio: "Envigado"
    },
    {
      id: 21,
      nombre: "Héctor Cardona",
      telefono: "621234567",
      cel: "3222345678",
      direccion: "Avenida 33 #25-45",
      barrio: "La Estrella"
    },
    {
      id: 22,
      nombre: "Adriana Salazar",
      telefono: "622345678",
      cel: "3193456789",
      direccion: "Diagonal 10 #5-15",
      barrio: "San Javier"
    },
    {
      id: 23,
      nombre: "Emilio Mejía",
      telefono: "623456789",
      cel: "3114567890",
      direccion: "Carrera 42 #8-30",
      barrio: "El Centro"
    },
    {
      id: 24,
      nombre: "Carmen León",
      telefono: "624567890",
      cel: "3185678901",
      direccion: "Calle 60 #12-25",
      barrio: "Los Colores"
    },
    {
      id: 25,
      nombre: "Felipe Arango",
      telefono: "625678901",
      cel: "3006789012",
      direccion: "Carrera 50 #22-50",
      barrio: "Boston"
    },
    {
      id: 26,
      nombre: "Beatriz Montoya",
      telefono: "626789012",
      cel: "3217890123",
      direccion: "Diagonal 20 #35-55",
      barrio: "El Poblado"
    },
    {
      id: 27,
      nombre: "Rodrigo Gil",
      telefono: "627890123",
      cel: "3168901234",
      direccion: "Transversal 18 #15-20",
      barrio: "Aranjuez"
    },
    {
      id: 28,
      nombre: "Silvia Córdoba",
      telefono: "628901234",
      cel: "3139012345",
      direccion: "Avenida 12 #30-40",
      barrio: "Los Balsos"
    },
    {
      id: 29,
      nombre: "Alfonso Quintero",
      telefono: "629012345",
      cel: "3050123456",
      direccion: "Calle 28 #10-60",
      barrio: "Laureles"
    },
    {
      id: 30,
      nombre: "Gloria Nieto",
      telefono: "630123456",
      cel: "3041234567",
      direccion: "Carrera 10 #5-30",
      barrio: "Sabaneta"
    }
  ];
  

const Reports = () => {

    return (
        <>
            <div className="container">
                <p className={`h6`}>Reportes</p>
                <div className={`d-flex flex-column ${styles.container} p-5`}>
                    <ReportFilterBar />
                    <div className={`mt-5 ${styles.scroll_table} p-3`}>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col" className={styles.td_data}>
                                        <p className="h6 fw-bolder">Usuario</p>
                                    </th>
                                    <th scope="col" className={styles.td_data}>
                                        <p className="h6 fw-bolder">Teléfono</p>
                                    </th>
                                    <th scope="col" className={styles.td_data}>
                                        <p className="h6 fw-bolder">Cel</p>
                                    </th>
                                    <th scope="col" className={styles.td_data}>
                                        <p className="h6 fw-bolder">Dirección</p>
                                    </th>
                                    <th scope="col" className={styles.td_data}>
                                        <p className="h6 fw-bolder">Barrio</p>
                                    </th>
                                    <th scope="col" className={styles.td_info}>
                                        <p className=""></p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    usuarios.map(({ id, nombre, telefono, cel, direccion, barrio }) => {
                                        return (
                                            <>
                                                <tr key={id}>
                                                    <td className={styles.td_data}>{nombre}</td>
                                                    <td className={styles.td_data}>{telefono}</td>
                                                    <td className={styles.td_data}>{cel}</td>
                                                    <td className={styles.td_data}>{direccion}</td>
                                                    <td className={styles.td_data}>{barrio}</td>
                                                    <td className={`${styles.td_info} text-end`}>
                                                        <button className={`${styles.btn_info}`}>
                                                            VER COMPLETO
                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reports;
