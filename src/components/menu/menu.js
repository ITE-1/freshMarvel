import { Link } from 'react-router-dom'
import './../menu/menu.scss'
import { useDispatch, useSelector } from 'react-redux';


const Menu = ({header, items}) => {

    const dispatch = useDispatch();
    const menuIsOpen = useSelector(state => state.isMenuOpen.isMenuOpen)

    return (
        <div className={menuIsOpen ? 'menu active' : 'menu'} onClick={() => dispatch({type: "TOGGLE_MENU"})}>
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