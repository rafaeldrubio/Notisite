import styled from "styled-components";
const Footerr = styled.li`
background-color: #121214;
color: #00875F;
Padding: 1em;
text-aling: center;
display: flex;
justify-content: center;
list-styled-type: none;
position: fixed;
bottom: 0;
width:100%;
`
function Footer(){
    return(
    <Footerr>
        <p>
            <span>Costs</span> &copy; 2021
        </p>
    </Footerr>
    )
}
export default Footer;