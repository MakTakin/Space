import React, { useState } from 'react'
import styled from 'styled-components'
import SandwichMenu from './sandwichMenu/sandwichMenu'
import { MenuLink } from '../../ui/link';

const NavMenu = styled.div`
    display: flex;
    
    @media(max-width: 1199px) {
        margin-right:20px;
    };
    
    @media(max-width: 990px) {
        display: none;
    };
`

const Menu = () => {
    const [menu, setMenu] = useState([
        'Главная',
        'Технология',
        'График полетов',
        'Гарантия',
        'О компании',
        'Контакты'
    ])
    const MenuItems = menu.map((item, i) => {
        return (
            <MenuLink to='/' key={i}>
                {item}
            </MenuLink>
        )
    })

    return (
        <>
            <NavMenu>
                {MenuItems}
            </NavMenu>
            <SandwichMenu menuItems={MenuItems}/>
        </>
    )
}
export default Menu