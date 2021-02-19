import React from 'react'
import { LogoLink } from '../../ui/link';
import logo from '../../../images/logo.png'

const Logo = () => {
    return (
        <LogoLink to='/'>
            <img src={logo} alt="space"/>
        </LogoLink>
    )
}
export default Logo