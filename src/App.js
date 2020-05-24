import React, { useState, useEffect } from "react";

import "./styles.css";
import api from "./services/api";


function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);


  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Title repository ${Date.now()}`,
      url: "urlFake.com",
      techs: ["Node", "Express", "TypeScript"]
    });

    const repo = response.data;
    setRepositories([...repositories, repo]);
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`repositories/${id}`);
    console.log(response)

    if (response.status === 204) {
      setRepositories(repositories.filter(repo => repo.id !== id))
    }
  }

  return (
    <>
      <ul data-testid="repository-list">

        {repositories.map(repo =>
          <li key={repo.id}>
            {repo.title}

            <button onClick={() => handleRemoveRepository(repo.id)}>Remover</button>

          </li>)
        }
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </>
  );
}

export default App;
