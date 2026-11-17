
import Curso from "./components/Curso";

function App() {

  return (
    <div>

      <h1>
        Cursos disponíveis
      </h1>

      <Curso
        nome="Desenvolvimento Web"
        professor="Carlos"
        descricao="Aprenda HTML, CSS e JavaScript."
      />

      <Curso
        nome="Python"
        professor="Mariana"
        descricao="Aprenda programação utilizando Python."
      />

      <Curso
        nome="React"
        professor="João"
        descricao="Aprenda a criar interfaces com React."
      />

    </div>
  );
}

export default App;
