
import { useState } from "react";

import Header from "./components/Header";
import PainelSenha from "./components/PainelSenha";
import Controles from "./components/Controles";

function App() {

  const [senha, setSenha] = useState(15);

  function proximaSenha() {
    setSenha(senha + 1);
  }

  function voltarSenha() {
    if (senha > 0) {
      setSenha(senha - 1);
    }
  }

  function reiniciar() {
    setSenha(0);
  }

  return (
    <div>

      <Header />

      <PainelSenha senha={senha} />

      <Controles
        voltarSenha={voltarSenha}
        reiniciar={reiniciar}
        proximaSenha={proximaSenha}
      />

    </div>
  );
}

export default App;
