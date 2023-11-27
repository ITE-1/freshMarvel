import borsh from '../../assets/img/borsh.png'
import vareniki from '../../assets/img/vareniki.jpg'
import '../popular/popular.scss'
import PopularItem from './popular-item'

const Popular = () => {

const dishesData = [
        {id: 1,
            itemName: 'Borsch',
            dscr: '1.лук 2.Капуста 3.Картошка',
            img: borsh,
        },
        {id: 6,
            itemName: 'Vareniki',
            dscr: '1.лук 2.Капуста 3.Картошка',
            img: vareniki,
        },
    
]

    return (
        <div className='popular'>
            <div className='popular__title'>Популярні страви</div>
            <div className='popular__list'>
                {dishesData.map(item => {
                    return <PopularItem {...item} />}
                )}
                

                
            </div>
          
      </div>
    )
}

export default Popular