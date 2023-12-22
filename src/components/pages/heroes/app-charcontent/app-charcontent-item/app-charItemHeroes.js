import Abys from '../abyss.jpg';

const CharItem = ({name, description, thumbnail}) => {



    return (
        <li className='char__item'>
            <img src={thumbnail} alt='no image'/>
          
            <div className='char__name'>{name}</div>    
        </li>
    )
}

export default CharItem;