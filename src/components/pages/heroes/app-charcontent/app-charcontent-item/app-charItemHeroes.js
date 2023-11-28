import Abys from '../abyss.jpg';

const CharItem = ({src, name}) => {



    return (
        <li className='char__item'>
            <img src={Abys} alt='{Abys}'/>
            <div className='char__name'>name - {name}</div>    
        </li>
    )
}

export default CharItem;