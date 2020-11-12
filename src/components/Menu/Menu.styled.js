import styled from 'styled-components';

export const MenuStyle = styled.nav`
z-index:999999;
text-align:center;
justify-content: center;
background-color: rgba(0,0,0,1);
width: 100%;
height: 20%;
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

    z-index:999;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    background-color: rgba(0,0,0, .9);
    width: 50%;
    height: 100%;
    text-align: left;
    position: fixed !important;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    .navitems{
      margin-top:100px;
      postion:fixed;
      top:0;
    }
    a {
      postition:fixed !important;
      display:block;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: bold;
      color: white;
      text-decoration: none;
      transition: color 0.3s linear;
      &:hover {
        color: darkgray;
      }
    }
`;