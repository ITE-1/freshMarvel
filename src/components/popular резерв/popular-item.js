
const PopularItem = ({id, img, dscr, itemName}) => {

    return (
        <div className='popular__item' key={id}>
            <div className='popular__item__title'>{itemName}</div>
            <img src={img} alt='borsh' />
            <div className='popular__item__dscr'>
                <p>Состав:</p>
              {dscr}
            </div>
            <button>Заказать</button> 
        </div>
    )
   
}

export default PopularItem