import styled from "styled-components";
import "../index.css";
const Layout = () => {
  return (
    <>
      <Content>
        <H1>background animation</H1>
      </Content>
      <div className="box">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Layout;
const Content = styled.div`
  background-color: #000;
  height: 100vh;
  overflow: hidden;
`;

const H1 = styled.h1`
  color: #fff;
  position: absolute;
  font-family: azonix;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 80px;
  text-align: center;
`;
