import React from 'react'
import styled from 'styled-components'
import Travel from './travel/travel';
import Start from './start/start';
import Advantages from './advantages/advantages';
import { Container } from '../ui/container';

const MainScreen = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 65px;
    
    @media(max-width: 1199px) {
        flex-direction: column;
    }
`

const LeftMainItem = styled.div`
    display: flex;
    align-items: center;  
      
    @media(max-width: 1199px) {
        flex-direction: column;
    }
`

const Main = () => {
    return (
        <Container>
            <MainScreen>
                <LeftMainItem>
                    <Travel/>
                    <Start/>
                </LeftMainItem>
                <Advantages/>
            </MainScreen>
        </Container>
    )
}
export default Main