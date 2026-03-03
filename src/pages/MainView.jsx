import { Calendario } from "../components/Calendario";
import "../styles/MainView.css";
<<<<<<< HEAD
import NavBar from "../components/NavBar";

=======
import { Footer } from "../components/Footer";
>>>>>>> 1d758fbc5809524759b86c14c9136c5f5fda67b6

export function MainView() {
  return (
    <div className="mainViewContainer">
      <NavBar />
      <Calendario />
    </div>
    
  );
}