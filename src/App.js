import React, { useState, useEffect } from "react";

import "./styles.css";
import api from "./services/api";


function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      console.log(response);

      // setRepositories(response.data)
    });
  }, []);


  async function handleAddRepository() {
    // TODO

  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          {repositories.map(repo => <li key={repo.id}>{repo.title}</li>)}


          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
