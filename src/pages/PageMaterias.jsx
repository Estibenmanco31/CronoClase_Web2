import React from "react";
import NavBarEstudiante from "../components/NavBarEstudiante";
import { Footer } from "../components/Footer";
import InfoMateria from "../components/InfoMateria";
import "../styles/PageMaterias.css";
import BannerMaterias from "../components/BannerMaterias";

import { useState, useEffect } from "react";
import { end_points, fakeRoutes } from "../services/api";

export default function PageMaterias() {
  const [estudiantes, setUserEstudiantes] = useState([]);

  function getEstudiantes() {
    fetch(end_points.estudiantes)
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos del fetch:", data); // <--- Aquí los verás
        setUserEstudiantes(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getEstudiantes();
  }, []);



  

  return (
    <div className="page-container">
      <NavBarEstudiante />

      <main className="mainViewContainer"></main>

      <Footer />
    </div>
  );
}
