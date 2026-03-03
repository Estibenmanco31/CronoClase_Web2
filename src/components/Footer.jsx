import "../styles/Footer.css";
import React from "react";
import clockLogo from "../assets/clock.png"; 

export function Footer() {
  return (
    <footer className="footer-container">
      <h3 className="titleCrono">
        Cron
        <img 
          className="userCrono" 
          src={clockLogo} 
          alt="Reloj" 
        />
        Clase
      </h3>
    </footer>
  );
}