import { useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);

  const aumentarContador = () => setCount(count + 1);

  // const disminuirContador = () => setCount(count - 1); Es la forma corta de hacerlo

  function disminuirContador() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Contador</p>
      <button onClick={aumentarContador}>Incrementar</button>
      <button onClick={disminuirContador}>Disminuir</button>
      <p>Me has pulsado {count} veces</p>
    </div>
  );
}
