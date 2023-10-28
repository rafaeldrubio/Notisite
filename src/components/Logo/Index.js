import logo from '../../Assets/logo@3x.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 5 20px;
  color: white;
  justify-content: center;
`
const LogoImag = styled.img`
justify-content: right;
margin-right: 10px;
padding: 5 20px;
`
function Logo(){
    return (
        <LogoContainer>
          <LogoImag 
            src={logo}
            alt='logo'
          ></LogoImag>
          <p><strong>Noti</strong>Site</p>
        </LogoContainer>
    )
}

export default Logo;