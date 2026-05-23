import React from 'react'
import "../styles/StyleLogInEstudiante.css";
import { useState, useEffect } from "react";
import { end_points, fakeRoutes } from "../services/api";
import { alertaGeneral, redirectAlert } from "../helpers/alerts";
import { saveLocalStorage } from "../helpers/local-storage";

export function LogInEstudiante() {
  /* [0,1] = useState('','')*/

  let [userEstudiante, setUserEstudiante] = useState("");
  let [passwordEstudiante, setPasswordEstudiante] = useState("");
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

  function findUser() {
    let foundEstudiante = estudiantes.find(
      (item) =>
        userEstudiante == item.email && passwordEstudiante == item.documentoID,
    );

    return foundEstudiante;
  }

  function signInEstudiante(e) {
    e.preventDefault();

    if (userEstudiante === "" || passwordEstudiante === "") {
      return alertaGeneral("Error", "Contraseña o email vacío", "warning");
    } else if (findUser()) {
      saveLocalStorage("estudiante", findUser() );
      redirectAlert(
        `Hola ${findUser().nombre}`,
        "Bienvenido, será redireccionado a su calendario",
        "/calendario-estudiante",
        "success",
      );
      return;
    } else if (findUser() == undefined) {
      return alertaGeneral("Error", "Contraseña o email invalidos", "error");
    }
  }

 return (
  <div className="log-in-estudainte-style">
    {/* Aplicamos tu lila exacto sacado de la imagen anterior */}
    <div 
      className="min-h-screen w-full flex items-center justify-center p-4 m-0" 
      style={{ backgroundColor: '#CBC2F5' }} 
    >
      
      <div
        id="form-container"
        className="bg-white p-10 sm:p-16 rounded-xl shadow-xl w-80 sm:w-96"
      >
        <h2 className="text-center home-title font-bold mb-10 text-gray-800">
          Estudiante
        </h2>

        <form className="space-y-5">
          <input
            className="w-full h-12 border border-gray-400 px-3 rounded-lg"
            placeholder="Email"
            id="email"
            name="email"
            type="text"
            onChange={(e) => {
              setUserEstudiante(e.target.value);
            }}
          />

          <input
            className="w-full h-12 border border-gray-400 px-3 rounded-lg"
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={(e) => {
              setPasswordEstudiante(e.target.value);
            }}
          />

          <button
            type="submit"
            className="w-full home-btn"
            onClick={(e) => signInEstudiante(e)}
          >
            Sign in
          </button>

          <button
            type="button"
            className="w-full home-btn"
          >
            Register
          </button>

          <div className="text-center pt-4">
            <a className="text-[#493d9e] hover:underline text-sm" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>

    </div>
  </div>
);
}
