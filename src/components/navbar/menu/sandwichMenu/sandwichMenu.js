import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './modal/modal';
import menu from '../../../../images/menu.png'
import close from '../../../../images/close.png'

const TabletsMenu = styled.div`
    cursor: pointer;
    
    @media(min-width: 990px) {
        display: none;
    };
    
    @media(max-width: 990px) {
        display: flex;
        margin-right: 20px;
    };
`

const SandwichMenu = ({menuItems}) => {
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
                <Modal
                    modal={modal}
                    setModal={setModal}
                    menuItems={menuItems}
                />
            }
        </>
    )
}
export default SandwichMenu