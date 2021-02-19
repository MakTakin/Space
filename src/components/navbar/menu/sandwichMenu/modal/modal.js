import React from 'react'
import styled from 'styled-components'

const ModalWindow = styled.div`
    position: fixed;
    font-size: 24px;
    font-weight: bold;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: flex-start;
    top: 105px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(4,11,20,0.98);
    
    @media(max-width: 480px) {
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        
    };
`

const Modal = ({modal, setModal, menuItems}) => {
    const closeModal = (event) => {
        if (event.target.id == 'close') {
            setModal(!modal)
        }
    }
    return (
        <ModalWindow id='close' onClick={closeModal}>
            {menuItems}
        </ModalWindow>
    )
}
export default Modal