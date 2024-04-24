import Klasna from "./components/Klasa";
import Funkcijska from "./components/Funkcijska";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Klasna Ime="Antonio"></Klasna>
      <Funkcijska Prezime="Gligora"></Funkcijska>
    </div>
  );
}

export default App;
