import { useState } from "react";
import "../styles/PanelMaterias.css";

export default function PanelMateria({ nombre }) {
  const [momentoActivo, setMomentoActivo] = useState(null);

  return (
    <div className="materia-card">
      <h2>{nombre}</h2>

      <div className="momentos">
        {[1, 2, 3].map((momento) => (
          <button
            key={momento}
            className="momento-btn"
            onClick={() => setMomentoActivo(momento)}
          >
            Momento {momento}
          </button>
        ))}
      </div>

      {momentoActivo && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>{nombre} – Momento {momentoActivo}</h3>
              <button onClick={() => setMomentoActivo(null)}>X</button>
            </div>

            {[1, 2, 3].map((actividad) => (
              <div className="actividad" key={actividad}>
                <label>Actividad {actividad}</label>
                <input type="date" />
                <select>
                  <option value="cumplido">Cumplido</option>
                  <option value="proceso">En proceso</option>
                  <option value="incumplido">Incumplido</option>
                </select>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}