import './../menu/menu.scss'


const Menu = ({header, items}) => {




    return (
        <div className="menu">
            <div className="blur"></div>
            <div className="menu__content">
                <div className="menu__header">{header}</div>
                <ul>
                   {items.map(item => 
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu