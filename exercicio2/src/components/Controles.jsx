
function Controles({ voltarSenha, reiniciar, proximaSenha }) {

  return (
    <div>

      <button onClick={voltarSenha}>
        ⬅️ Voltar senha
      </button>

      <button onClick={reiniciar}>
        🔄 Reiniciar
      </button>

      <button onClick={proximaSenha}>
        ➡️ Próxima senha
      </button>

    </div>
  );
}

export default Controles;
