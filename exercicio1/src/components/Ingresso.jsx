
import { useState } from "react";

function Ingresso({ evento, preco }) {

  const [quantidade, setQuantidade] = useState(1);

  function adicionar() {
    setQuantidade(quantidade + 1);
  }

  function diminuir() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  return (
    <div>

      <h2>
        {evento}
      </h2>

      <p>
        Ingressos: {quantidade}
      </p>

      <p>
        Valor unitário: R$ {preco}
      </p>

      <p>
        Total: R$ {quantidade * preco}
      </p>

      <button onClick={diminuir}>
        ➖
      </button>

      <button onClick={adicionar}>
        ➕
      </button>

    </div>
  );
}

export default Ingresso;
