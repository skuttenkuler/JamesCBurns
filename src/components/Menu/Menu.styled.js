import styled from 'styled-components';

export const MenuStyle = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 999
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    

    &:hover {
      color: blue;
    }
  }
`;