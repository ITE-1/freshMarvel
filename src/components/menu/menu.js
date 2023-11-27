import { Link } from 'react-router-dom'
import './../menu/menu.scss'


const Menu = ({header, items, active, setActive}) => {

    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur"></div>
            <div className="menu__content">
                <div className="menu__header">{header}</div>  
                <ul>
                   {items.map(item => 
                        <li className='menu__link'>
                            <Link to={item.href}>{item.value}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu