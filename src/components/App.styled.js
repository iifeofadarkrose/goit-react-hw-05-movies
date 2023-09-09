import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  padding: 20px 30px;
  margin-left:100px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;


&:hover{
    color: aqua;
    border-color: #14110F;
    background-color: #D9C5B2;
}

&.active {
border-color: black;
background-color: white;
}

`
export const WrapNavStyled = styled.nav`
margin: 20px;
margin-bottom: 40px;
`