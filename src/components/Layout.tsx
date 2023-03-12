import Nav, { NAV_HEIGHT } from "./Nav";
import { palette } from "./palette";
import styled from "@emotion/styled";

const Header = styled("div")`
  background-color: ${palette.SEAFOAM_GREEN};
  padding: 0;
`;
const Body = styled("main")`
  position: relative;
  background-color: ${palette.PINK};
  min-height: calc(100% - ${NAV_HEIGHT} - 32px); // Sub padding
  padding: 16px;
  text-align: center;
`;

const FullHeight = styled("div")`
  height: 100%;
`;

const Layout = ({ children }: { children?: any }) => (
  <FullHeight>
    <Header>
      <Nav />
    </Header>
    <Body>
      <main>{children}</main>
    </Body>
  </FullHeight>
);

export default Layout;
