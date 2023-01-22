import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Btn from "./Btn";
const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Nav>
      Navbar
      <ContainerBtn>
        <Btn pathname={pathname} to="/">
          Home
        </Btn>
        <Btn pathname={pathname} to="/about">
          About
        </Btn>
        <Btn pathname={pathname} to="/contact">
          Contact
        </Btn>
      </ContainerBtn>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  padding: 10px;
  display: flex;
  align-items: center;
  font-family: azonix, sans-serif;
  color: #fff;
  background-color: transparent;
  justify-content: space-around;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
`;
