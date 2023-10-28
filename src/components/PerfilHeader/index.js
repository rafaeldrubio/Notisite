import perfil from '../../Assets/Perfil.svg'
import styled from 'styled-components'

const Icone = styled.li`
  display: flex;
`
const Icones = styled.ul`
  margin-right: 50px;
  width: 25px;
  cursor: pointer;
`
const icones = [perfil]

function PerfilHeader(){
    return(
        <Icones>
          {icones.map( (icones) => (
            <Icone><img src={perfil}></img></Icone>
          ) ) }
        </Icones>
    )
}
export default PerfilHeader;