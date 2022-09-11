import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const contenido = (
  <div>
    <h1>NOTICIAS GAMING</h1>
    <div>Body Of Page, Omg this found</div>
  </div>
);

function Componente({ titulo, contenido }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{contenido}</div>
    </div>
  );
}

ReactDOM.render(<Componente titulo="Titulo 1" contenido="Hola desde componente de react"/>, document.getElementById("root"));
