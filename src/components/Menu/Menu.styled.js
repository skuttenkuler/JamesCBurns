import styled from 'styled-components';

export const MenuStyle = styled.nav`
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
`;