import { ReactNode } from "react";
import Nav from "./Nav";
import styled from "@emotion/styled";

const Header = styled("div")`
  background-color: #93e9be;
  padding: 0;
`;
const Body = styled("main")``;

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <Header>
      <Nav />
    </Header>
    <Body>
      <main>{children}</main>
    </Body>
  </div>
);

export default Layout;
