import "../styles/PanelCargaActividades.css";
import { PanelMomento } from "../components/PanelMomento";
import { Footer } from "../components/Footer";


export function PanelCargaActividades (){
    return(
        <main className="PanelCargaActividades">
             <h2>Panel de carga de Actividades</h2>
             <div>
                    <PanelMomento />
                    <PanelMomento />
                    <PanelMomento />
             </div>
        
        </main>

     
    );
}

