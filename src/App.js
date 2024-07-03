import imageRickMorty from './img/rick-morty.png'
import './App.css';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import Characters from './components/Characters';



function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => { //Hagamos la constnate asyncrono
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json(); //Para ver con más detalle la info de los elementos
    console.log(characterApi);
    setCharacters(characterApi.results);
    
  };

  //console.log(characters); //Para ver qué estamos recibiendo del request 

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty</h1>

        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={imageRickMorty} alt='Rick & Morty' className='img-home'/>
            <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
          </>
        )}
        

        
      </header>
    </div>
  );

}

export default App;
