import styled from 'styled-components';

export const MenuStyle = styled.nav`
  display: flex;
  z-index:999;
  flex-direction: row;
  justify-content: center;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
  background-color: black;
  width: 100%;
  height: 200px;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  a {
    font-size: 20px;
    text-transform: uppercase;
    padding: 4rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
    margin:15px;

    &:hover {
      color: darkgray;
    }
  }
`;