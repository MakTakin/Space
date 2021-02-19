import React from 'react'
import styled from 'styled-components'

const TravelText = styled.div`
    background: linear-gradient(90deg, #ffffff, #ff4106);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #ff4106;
    font-size: 48px;
    > div {
        font-size: 24px;
    }
    > h1 {
        font-size: 48px;
        margin: 0;
    }
    
    @media (min-width: 1199px) {
        display: none;
    }
`

const Travel = () => {
    return (
        <TravelText>
            <h1>Путешествие</h1>
            <div>на красную планету</div>
        </TravelText>
    )
}
export default Travel