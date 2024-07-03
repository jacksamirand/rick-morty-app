export default function Characters(props){
    const {characters, setCharacters} = props; //Extracción la información 

    const resetCharacters = () => {
        setCharacters(null);
    }

    //Maquetación de la información y recorrer nuestros datos
    return(
        <div className="characters">
            <span className="back-home" onClick={resetCharacters}>Volver a home</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}/>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="alive"/>Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead"/>Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{character.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver a home</span>
        </div>
    );
}