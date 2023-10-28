import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';


const Option = styled.ul`
display: flex;

`
const Options = styled.li`
font-size: 20px;
display: flex;
align-items: center;
text-align: center;
padding: 0 10px;
min-width: 120px;
color: white;
justify-content: center;
`
function OptionsHeader(){
    return(
      <Option>
        <Options>
          <Link to="/News">New</Link>
          </Options>
          <Options>
          <Link to="/Login">Login</Link>
          </Options>
          <Options>
          <Link to="/Register">Register</Link>
        </Options>
      </Option>
    )
}

export default OptionsHeader;