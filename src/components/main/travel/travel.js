import React from 'react'
import styled from 'styled-components'

const TravelText = styled.div`
    background: linear-gradient(90deg, #ffffff, #ff4106);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #ff4106;
    
    @media (min-width: 1199px) {
        display: none;
    }
`

const TravelH1 = styled.h1`
    font-size: 48px;
    margin: 0;
`

const TravelDiv = styled.div`
    font-size: 24px;
`

const Travel = () => {
    return (
        <TravelText>
            <TravelH1>Путешествие</TravelH1>
            <TravelDiv>на красную планету</TravelDiv>
        </TravelText>
    )
}
export default Travel