
import { useState } from "react";

function Curso({ nome, professor, descricao }) {

  const [mostrarDescricao, setMostrarDescricao] =
    useState(false);

  return (
    <div>

      <h2>
        {nome}
      </h2>

      <p>
        Professor: {professor}
      </p>

      <button
        onClick={() =>
          setMostrarDescricao(!mostrarDescricao)
        }
      >
        {mostrarDescricao
          ? "Ocultar descrição"
          : "Ver descrição"}
      </button>

      {mostrarDescricao && (
        <p>
          {descricao}
        </p>
      )}

    </div>
  );
}

export default Curso;
