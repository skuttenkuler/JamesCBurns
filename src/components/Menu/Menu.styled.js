import styled from 'styled-components';

export const MenuStyle = styled.nav`
z-index:999999;
text-align:center;
justify-content: center;
background-color: rgba(0,0,0,1);
width: 100%;
height: 12%;
position: fixed;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;
a {
  display: inline;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  margin:15px;

  &:hover {
    color: darkgray;
  }
}
  @media only screen and (max-width: 600px) {
  display: flex;
  z-index:999;
  flex-direction: column;
  text-align:center;
  justify-content: center;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  background-color: rgba(0,0,0,.6);
  
  width: 25%;
  height: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  a {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    margin:15px;

    &:hover {
      color: darkgray;
    }
  }
}
`;