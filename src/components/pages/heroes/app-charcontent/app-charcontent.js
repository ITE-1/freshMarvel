import { useContext } from 'react';
import { heroesLibraryContext } from '../heroesLibrary';
import './app-charcontent.scss';
import MarvelServices from '../../../../fetchindData/marvelServices';
import CharItem from './app-charcontent-item/app-charItemHeroes';

const marvelServies = new MarvelServices();

const CharList = () => {
  const {charactersList} = useContext(heroesLibraryContext);
  
  const _getThumbnailStyle = (thumbnail) => {
    let imgStyle = { objectFit: 'cover' };

    if (
      thumbnail ===
      'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
    ) {
      imgStyle = { objectFit: 'fill' };
    }


       // const imgStyle = _getThumbnailStyle(character.thumbnail);
                    // const itemClasses = `char__item ${index === activeIndex ? 'active' : ''}`;

    return imgStyle;
  };

  const handleSelectItem = () => {
  console.log(charactersList)

  }
  
  

  return (

        <div className='char__list'>
            
            <ul className='char__grid'>
                 
                {charactersList.map(item => <CharItem key={item.id} {...item}/>
              )}
              
  
                 
            </ul>
            <button onClick={handleSelectItem} className="myButton">Загрузить персонажей</button>
        </div>
    )
};

export default CharList;