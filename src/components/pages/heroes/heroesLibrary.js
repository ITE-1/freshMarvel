
import CharList from "./app-charcontent/app-charcontent";
import './app-charcontent/app-charcontent.scss'
import CharInfo from "./char-info/char-info";
import { createContext, useEffect, useState } from "react";
import MarvelServices from "../../../fetchindData/marvelServices";
const marvel = new MarvelServices();

const defaultValue = {
    charactersList: [],
    setCharactersList: () => {},
}


export const heroesLibraryContext = createContext(defaultValue);

const HeroesLibrary = () => {
const [charactersList, setCharactersList] = useState([])


const getAllCharacters = () => {

    try {
    marvel
    .getAllCharacters(10)
    .then(data => setCharactersList(data))

    } catch (error) {
        console.log(error, 'didnt work')
    }
}

useEffect(() => {
    getAllCharacters()
}, [])


    return (
        <heroesLibraryContext.Provider value={{charactersList}}>
        <div style={{marginLeft: '2%', paddingTop: '8%', width: '90vw'}}>
                <h1>Heroes library</h1>
             <div className="char__content">
                <CharList />
                <CharInfo />
            </div>
        </div>
        </heroesLibraryContext.Provider>
    )
}

export default HeroesLibrary;