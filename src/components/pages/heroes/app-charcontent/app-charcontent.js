
import './app-charcontent.scss';
import MarvelServices from '../../../../fetchindData/marvelServices';
import CharItem from './app-charcontent-item/app-charItemHeroes';
import { useDispatch, useSelector } from 'react-redux';

const marvelServies = new MarvelServices();

const CharList = () => {

// const dispatch = useDispatch();
// const charactersList = useSelector(state => state.charactersList);

// const getCharactersList = async () => {

//   try {
//      await marvelServies
//           .getAllCharacters()
//           .then(data => )
//   }
  
// }


  
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

  const handleSelectItem = (e) => {
    const currentTarget = e.target;
    console.log(currentTarget)
  }
  


  return (

        <div className='char__list'>
            
            <ul className='char__grid'>
            
                 <CharItem />
                       
          
              
  
                 
            </ul>
            <button className="myButton">Загрузить персонажей</button>
        </div>
    )
};

export default CharList;