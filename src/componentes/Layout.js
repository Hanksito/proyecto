import { Outlet } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Content>
        <Navbar />
        <PageContainer>
          <Outlet />
        </PageContainer>
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
  background-color: #0e181e;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const PageContainer = styled.div`
  margin-top: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80%;
  height: 90%;
`;
