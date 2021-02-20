import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MenuLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-left: 40px;
    font-family: 'MuseoSansLight';
    cursor: pointer;
    
    &:hover {
        color: #b1b1b1;
        text-decoration: underline;
    }
    
    @media(max-width: 1199px) {
        margin-left: 20px;
    }
`

export const LogoLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    padding: 25px 20px 40px 25px;
    position: relative;
    border: 1px solid white;
  
    &::before, 
    &::after {
        content: "";
        display: block;
        position: absolute;
        background: transparent;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transform-origin: 50% 50%;
    }
    
    &::before {
        width: 100%;
        height: 80%;
        border-right: 1px solid #303033;
        border-left: 1px solid #303033;
    }
    &::after {
        height: 100%;
        width: 90%;
        border-top: 1px solid #303033;
        border-bottom: 1px solid #303033;
    }
    
    @media(max-width: 480px) {
        padding: 25px 0 40px 10px;
    }
`