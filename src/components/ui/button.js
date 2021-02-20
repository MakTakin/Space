import styled from 'styled-components'

export const StartButton = styled.button`
    font-size: 14px;
    color: #fff;
    outline: none;
    font-family: 'MuseoSansThin';
    cursor: pointer;
    padding: 10px 25px;
    margin: 90px 0 0 20px;
    background: rgba(138 138 142 / 20%);
    border: 1px solid transparent;
    border-image: linear-gradient(45deg,white 3%, rgb(36, 89, 156) 3%, rgb(36, 89, 156) 50%, rgb(16, 31, 45),rgb(16, 31, 45) 97%,white 97%);
    border-image-slice: 1;
    
    /* Макет не позволяет выравнить кнопку для разных экранов */
    @media(min-width: 1400px) {
        margin-bottom: -50px;
    }
    
    @media(min-width: 1500px) {
        margin-bottom: -100px;
    }
    
    @media(min-width: 1600px) {
        margin-bottom: -150px;
    }
    
    @media(max-width: 1199px) {
        font-size: 18px;
        margin-left: 0;
    }
`

