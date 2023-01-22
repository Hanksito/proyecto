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
  position: relative;
  background-size: 50% 50%, 50% 50%;
  margin-top: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80%;
  height: 90%;
  color: #fff;
  background-color: transparent;
  overflow: hidden;
  border-radius: 16px;
  transition: 1s;
  animation: rotate 4s linear infinite;
  @keyframes rotate {
    0% {
      border-top: 1px solid rgba(255, 49, 49, 0.5);
      border-right: 1px solid rgba(0, 255, 255, 0.5);
      border-bottom: 1px solid rgba(57, 255, 20, 0.5);
      border-left: 1px solid rgba(255, 255, 113, 0.5);
    }
    25% {
      border-top: 1px solid rgba(255, 255, 113, 0.5);
      border-right: 1px solid rgba(255, 49, 49, 0.5);
      border-bottom: 1px solid rgba(0, 255, 255, 0.5);
      border-left: 1px solid rgba(57, 255, 20, 0.5);
    }
    50% {
      border-top: 1px solid rgba(57, 255, 20, 0.5);
      border-right: 1px solid rgba(255, 255, 113, 0.5);
      border-bottom: 1px solid rgba(255, 49, 49, 0.5);
      border-left: 1px solid rgba(0, 255, 255, 0.5);
    }
    75% {
      border-top: 1px solid rgba(0, 255, 255, 0.5);
      border-right: 1px solid rgba(57, 255, 20, 0.5);
      border-bottom: 1px solid rgba(255, 255, 113, 0.5);
      border-left: 1px solid rgba(255, 49, 49, 0.5);
    }
    100% {
      border-top: 1px solid rgba(255, 49, 49, 0.5);
      border-right: 1px solid rgba(0, 255, 255, 0.5);
      border-bottom: 1px solid rgba(57, 255, 20, 0.5);
      border-left: 1px solid rgba(255, 255, 113, 0.5);
    }
  }
`;
