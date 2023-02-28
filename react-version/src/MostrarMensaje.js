import "./MostrarMensaje.css";
export default function MostrarMensaje({ number, secretNumber }) {
  if (secretNumber === number) {
    return <p className="message"> ¡Has acertado!</p>;
  } else if (number === "") {
    return <p class="message">¿Empezamos a jugar?</p>;
  } else if (number > secretNumber) {
    return <p className="message"> Demasiado alto</p>;
  } else {
    return <p className="message"> Demasiado bajo</p>;
  }
}
