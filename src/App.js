import styled from 'styled-components'
import background from './assets/images/background.png'
import bgMobile from './assets/images/bgMobile.png'
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';

const Background = styled.div`
    background-image: url(${background});
    height: 100vh;
    background-position-x: center;
    background-size: cover;
    
    @media (max-width: 1199px) {
        background-image: url(${bgMobile});
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
        height: auto;
    }
`

function App() {
    return (
        <Background>
            <Navbar/>
            <Main/>
        </Background>
    );
}

export default App;
