import { ReactNode } from "react";
import Nav, { NAV_HEIGHT } from "./Nav";
import styled from "@emotion/styled";

const Header = styled("div")`
  background-color: #93e9be;
  padding: 0;
`;
const Body = styled("main")`
  position: relative;
  background-color: pink;
  min-height: calc(100% - ${NAV_HEIGHT});
`;

const Layout = ({ children }: { children: ReactNode }) => (
  <div style={{ height: "100%" }}>
    <Header>
      <Nav />
    </Header>
    <Body>
      <main>{children}</main>
    </Body>
  </div>
);

export default Layout;
