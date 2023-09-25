import * as React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContainer = styled.div`
  --bar-height: 50px;
  height: 100dvh;
  width: 100dvw;
  background-color: papayawhip;
  display: flex;
  justify-content: center;
  font-family: "Trebuchet MS", Arial, sans-serif;
`;

const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
