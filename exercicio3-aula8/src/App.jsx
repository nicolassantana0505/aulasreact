
import Produto from "./components/Produto";

function App() {

  return (
    <div>

      <h1>
        Loja Tech
      </h1>

      <Produto
        nome="Notebook Gamer"
        preco={4500}
        descricao="Notebook voltado para jogos e desenvolvimento."
        especificacoes="16GB RAM, SSD 1TB, RTX 4060"
      />

    </div>
  );
}

export default App;
