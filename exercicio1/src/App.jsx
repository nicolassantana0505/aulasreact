
import Ingresso from "./components/Ingresso"
function App() {

  return (
    <div>

      <h1>
        Controle de ingressos
      </h1>

      <Ingresso
        evento="Festival de Tecnologia"
        preco={50}
      />

    </div>
  );
}

export default App;















// import { useState } from "react";

// function App() {

//   const [curtidas, setCurtidas] = useState(0);

//   function curtir() {
//     setCurtidas(curtidas + 1);
//   }

//   function removerCurtida() {
//     if (curtidas > 0) {
//       setCurtidas(curtidas - 1);
//     }
//   }

//   return (
//     <div>

//       <h1>
//         ❤️ Curtidas: {curtidas}
//       </h1>

//       <button onClick={curtir}>
//         Curtir
//       </button>

//       <button onClick={removerCurtida}>
//         Remover curtida
//       </button>

//     </div>
//   );
// }

// export default App;
