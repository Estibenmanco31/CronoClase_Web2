import { Calendario } from "../components/Calendario";
import "../styles/MainView.css";
import { Footer } from "../components/Footer";

export function MainView() {
  return (
    <div className="mainViewContainer">
      <Calendario />
    </div>
    
  );
}