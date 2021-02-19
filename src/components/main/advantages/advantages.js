import React, { useState } from 'react'
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

    > div {
        font-size: 60px;
        font-weight: bold;
        > span {
            font-size: 18px;
            font-weight: regular;
        }
    }
    &:hover {
        background: linear-gradient(135deg, rgb(255, 255, 255, -1) 19%, rgb(167, 167, 167, 0.1));
    }
    
    @media (max-width: 480px) {
        width: 150px;
        font-size: 16px;
        > div {
        font-size: 40px;
            > span {
                font-size: 16px;
        }
    }
`

const Advantages = () => {
    const [text, setText] = useState([
        `мы <div>1</div> на рынке`,
        `гарантируем <div>50%</div> безопасность`,
        `календарик за <div>2001<span>г.<span/></div> в подарок`,
        `путешествие <div>597</div> дней`
    ])

    const AdvantagesItems = text.map((item, i) =>
          <Advantage key={i} dangerouslySetInnerHTML={{ __html: item }}/>)

    return (
        <AdvantagesFlex>
            {AdvantagesItems}
        </AdvantagesFlex>
    )
}
export default Advantages