import React from 'react'
import styled from 'styled-components'
import Logo from './logo/logo';
import Menu from './menu/menu';
import { Container } from '../ui/container'

const NavMenu = styled.div`
    background: rgba(21,10,1, 0.21);
    border-bottom: 1px solid #303033;
`

const MenuFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  
`

const Navbar = () => {
    return (
        <NavMenu>
            <Container>
                <MenuFlex>
                    <Logo/>
                    <Menu/>
                </MenuFlex>
            </Container>
        </NavMenu>
    )
}
export default Navbar