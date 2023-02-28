import "./App.css";
import { useState, useRef, useEffect } from "react";
import MostrarMensaje from "./MostrarMensaje.js";

const randomNumber = () => Math.trunc(Math.random() * 20) + 1;
let number = "";
function App() {
  const [score, setScore] = useState(20);
  const [number, setNumber] = useState("");
  const [highscore, sethighscore] = useState(0);
  const [secretNumber, setSecretNumber] = useState(randomNumber());
  const inputRef = useRef(null);

  const handleCheck = () => {
    setNumber(Number(inputRef.current.value));
  };

  useEffect(() => {
    console.log(`El numero secreto de ${secretNumber}`);
    console.log(`El numero introducido es ${number}`);
    if (number === secretNumber) {
      // mensaje has ganado
      // mostrar el numero secreto (hecho en el codigo)
      // cambia el color de fondo
      // si el score es mayor que el highscore, actualizar el highscore
    } else if (score === 1) {
      setScore(score - 1);
      //mensaje perdiste
      //cambio de color de fondo
    } else {
      // mensaje es mas bajo
      // disminuir el score
      setScore(score - 1);
    }
  }, [number]);

  return (
    <div>
      <header>
        <h1>¡Acierta mi Numero!</h1>
        <p className="between">( Numeros entre 1 y 20 )</p>
        <button className="btn again">Again!</button>
        <div className="number">{number === secretNumber ? number : "?"}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <MostrarMensaje number={number} secretNumber={secretNumber} />
          <p className="label-score">
            💯 Puntuación: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Maxima puntuación: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
