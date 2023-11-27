import RandomcharBlock from "./randomchar-block/randomchar-block";
import RandnomCharStatic from "./randomchar-static/randomchar-static";
import Spinner from "../../../spiner/spiner";
import '../random-char/app-randomchar.scss';
import MarvelService from '../../../../fetchindData/marvelServices';
import { useEffect, useState } from "react";
const fetch = new MarvelService();

const RandomChar = () => {

const [randomCharacter, setRandomCharacter] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);

const fetchData = async () => {
    setLoading(true)
    try {
        const  offset = Math.floor(Math.random() * 1000);
        const data = await fetch.getCharacters(offset);
        setRandomCharacter(data);
        setLoading(false);
    } catch (error) {
        setError(true);
        console.log(error, 'error');
    }
};

useEffect(() => {
    setLoading(true);
  fetchData();
},[])

    return (
        <div className="randomchar">
            {loading ? <Spinner /> : <RandomcharBlock {...randomCharacter}/>}
       
            {/* <button onClick={() => console.log(randomCharacter)}>ss</button> */}
            {/* {error ? <RandomcharBlock /> : ''} */}
            <RandnomCharStatic getCharacter={fetchData}/>
        </div>
    )
}

export default RandomChar;