
import styled from 'styled-components'
import Logo from '../Logo/Index'
import OptionsHeader from '../OptionsHeader'

const HeaderContainer = styled.header`
    justify-content: space-between;
    background-color:#121214;
    display: flex;
`
function Header(){
    return(
    <HeaderContainer>
        <Logo/>
        <OptionsHeader/>
      </HeaderContainer>
      )
}
export default Header