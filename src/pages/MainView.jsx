import { Calendario } from "../components/Calendario";
import "../styles/MainView.css";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";


export function MainView() {
  return (
    <div className="mainViewContainer">
      <NavBar />
      <Calendario />
      <Footer />
    </div>
    
  );
}