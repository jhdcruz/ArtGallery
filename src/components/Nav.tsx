import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.nav`
  display: block;
  font-size: 1.35vw;
  width: max-content;
  height: max-content;
  padding: 0 0.5vw;
  align-self: center;
  border-right: 0.15vw solid ${(props) => props.theme.colors.dark};
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.colors.dark};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1vw;
  text-shadow: 0 0 0.05vw #333;
  display: block;
  height: max-content;
  width: max-content;
  margin: 5vw auto;
  padding: 0.75vw;
  transform: rotate(-91deg);
  transition: all 0.15s;

  &:hover:before {
    left: 0 !important;
    right: 0 !important;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 100%;
    right: 100%;
    bottom: 0;
    background: ${(props) => props.theme.colors.dark};
    height: 0.15vw;
    transition-property: left, right;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
  }

  &:hover {
    transform: rotate(-91deg);
  }
`;

const Nav = () => (
  <NavBar>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/gallery">Gallery</NavLink>
    <NavLink to="about">About</NavLink>
  </NavBar>
);

export default Nav;