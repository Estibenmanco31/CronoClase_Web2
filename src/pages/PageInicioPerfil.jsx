import React from 'react'
import LogoClock from '../components/LogoClock'
import PageInicioPerfilButton from '../components/PageInicioPerfilButton'
import { Link } from 'react-router-dom';
import "../styles/StylePageInicioPeril.css";


function PageInicioPerfil() {

    return (
    <div className="home-container">
      <header className="home-header">
        <LogoClock/>
       
      </header>
      
      <main className="home-content">
        <h2 className="home-title">Escoge tu rol</h2>
        <div className="home-buttons">
          <Link to="/inicio-sesion-estudiante" className="home-btn">Estudiante</Link>
          <Link to="/inicio-sesion-profesor" className="home-btn">Profesor</Link>
        </div>
      </main>
    </div>
  );

  
}

export default PageInicioPerfil