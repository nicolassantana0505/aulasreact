
import { useState } from "react";

function App() {

  const [presente, setPresente] = useState(false);

  return (
    <div>

      <h1>
        Status: {presente ? "Presente" : "Ausente"}
      </h1>

      <button
        onClick={() =>
          setPresente(!presente)
        }
      >
        {presente
          ? "Remover presença"
          : "Marcar presença"}
      </button>

    </div>
  );
}

export default App;
