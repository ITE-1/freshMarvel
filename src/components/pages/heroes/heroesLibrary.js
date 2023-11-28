import CharList from "./app-charcontent/app-charcontent";
import './app-charcontent/app-charcontent.scss'
import CharInfo from "./char-info/char-info";

const HeroesLibrary = () => {



    return (
        <div style={{marginLeft: '2%', paddingTop: '8%', width: '90vw'}}>
                <h1>Heroes library</h1>
             <div className="char__content">
                <CharList />
                <CharInfo />
            </div>
        </div>
       
    )
}

export default HeroesLibrary;