import React, { useState } from 'react'
import styled from 'styled-components'
import Mobile from './mobile/mobile';
import menu from '../../../../assets/images/menu.png'
import close from '../../../../assets/images/close.png'

const TabletsMenu = styled.div`
    cursor: pointer;
    
    @media(min-width: 990px) {
        display: none;
    }
    
    @media(max-width: 990px) {
        display: flex;
        margin-right: 20px;
    }
`

const Sandwich = ({menuItems}) => {
    const [modal, setModal] = useState(false)

    const openMenu = () => {
        setModal(!modal)
    }

    return (
        <>
            <TabletsMenu onClick={() => openMenu()}>
                {modal ?
                    <img src={close} alt="close"/> :
                    <img src={menu} alt="menu"/>
                }
            </TabletsMenu>
            { modal &&
                <Mobile
                    modal={modal}
                    setModal={setModal}
                    menuItems={menuItems}
                />
            }
        </>
    )
}
export default Sandwich