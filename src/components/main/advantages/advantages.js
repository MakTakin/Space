import React from 'react'
import styled from 'styled-components'

const AdvantagesFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 35%;
    justify-content: flex-end;
    
    @media (max-width: 1199px) {
        flex: 0 1 100%;
        justify-content: center;
        margin-top: 50px;
    }
`
const Advantage = styled.div`
    font-size: 18px;
    font-family: 'MuseoSansThin';
    padding:30px 0;
    cursor: pointer;
    margin: 0 0 10px 10px;
    background: linear-gradient(135deg, rgb(255, 255, 255, -1) 19%, rgb(167, 167, 167, 0.02));
    text-align: center;
    width: 185px;
    
    &::hover {
        background: linear-gradient(135deg, rgb(255, 255, 255, -1) 19%, rgb(167, 167, 167, 0.1));
    }

    @media (max-width: 480px) {
        width: 150px;
        font-size: 16px;
    }
`

const AdvantageDiv = styled.div`
    font-size: 60px;
    font-weight: bold;
    
    @media (max-width: 480px) {
        font-size: 40px;
    }
`

const Advantages = () => {
    const text = [
        {
            header: 'мы',
            main: '1',
            footer: 'на рынке'
        },
        {
            header: 'гарантируем',
            main: '50%',
            footer: 'безопасность'
        },
        {
            header: 'календарик за',
            main: '2001г.',
            footer: 'на рынке'
        },
        {
            header: 'путешествие',
            main: '597',
            footer: 'дней'
        }
    ]

    const AdvantagesItems = text.map((item, i) => {
        return (
            <Advantage>
                {item.header}
                <AdvantageDiv>
                    {item.main}
                </AdvantageDiv>
                {item.footer}
            </Advantage>

        )
    })


    return (
        <AdvantagesFlex>
            {AdvantagesItems}
        </AdvantagesFlex>
    )
}
export default Advantages