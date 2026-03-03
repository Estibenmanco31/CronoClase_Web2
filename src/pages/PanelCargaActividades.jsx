import "../styles/PanelCargaActividades.css";
import { PanelMomento } from "../components/PanelMomento";
<<<<<<< HEAD
import NavBar from "../components/NavBar";
=======
import { Footer } from "../components/Footer";
>>>>>>> 1d758fbc5809524759b86c14c9136c5f5fda67b6


export function PanelCargaActividades() {
    return (
        <div className="PanelCargaActividadesContainer">
            <NavBar />
            <main className="PanelCargaActividades">
                <h2>Panel de carga de Actividades</h2>
                <div>
                    <PanelMomento />
                    <PanelMomento />
                    <PanelMomento />
<<<<<<< HEAD
                </div>

            </main>

        </div>

=======
             </div>
        
        </main>

     
>>>>>>> 1d758fbc5809524759b86c14c9136c5f5fda67b6
    );
}

