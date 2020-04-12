import React , {useState, useEffect} from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);
  useEffect(()=>{
    api.get('repositories').then(response => {
      setRepositories(response.data);
    });
  },[])

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title : `Desafio Reacts ${Date.now()}`,
      url: "https://github.com/adaolima/reactjs-challenge-gostack",
      techs: [ "React", "Reactjs", "Nodejs"]
    });
    const repository = response.data;
    setRepositories([...repositories,repository]);
  }

  async function handleRemoveRepository(id) {
    const repositoriesNew = repositories;
    await api.delete(`/repositories/${id}`);
    const repositoryIndex = repositoriesNew.findIndex(repo => repo.id === id);
    repositoriesNew.splice(repositoryIndex, 1);
    setRepositories([...repositoriesNew]);
    console.log(repositories);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>{repository.title}
           <button onClick={() => handleRemoveRepository(repository.id)}>
            Remover
          </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
