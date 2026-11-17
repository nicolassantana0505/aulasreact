
import { useState } from "react";

function Produto({
  nome,
  preco,
  descricao,
  especificacoes
}) {

  const [favorito, setFavorito] = useState(false);

  const [mostrarDetalhes, setMostrarDetalhes] =
    useState(false);

  return (
    <div>

      <h2>
        {nome}
      </h2>

      <p>
        R$ {preco}
      </p>

      <button
        onClick={() =>
          setFavorito(!favorito)
        }
      >
        {favorito
          ? "♥ Favoritado"
          : "♡ Favoritar"}
      </button>

      <button
        onClick={() =>
          setMostrarDetalhes(!mostrarDetalhes)
        }
      >
        {mostrarDetalhes
          ? "Ocultar detalhes"
          : "Ver detalhes"}
      </button>

      {mostrarDetalhes && (
        <div>

          <p>
            {descricao}
          </p>

          <p>
            {especificacoes}
          </p>

        </div>
      )}

    </div>
  );
}

export default Produto;
