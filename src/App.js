import Header from './components/Header/Index';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Footerr from './components/Footer/index';
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#202024;
`

function App() {
  return (
    <AppContainer>
    <Header />
    <Outlet/>
    <Footerr/>
    </AppContainer>
  );
}
export default App;