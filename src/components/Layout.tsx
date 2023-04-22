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
  @media screen and (max-width: 480px) {
    height: calc(100% - 96px - 64px);
  }
`;

const FullHeight = styled("div")`
  height: 100%;
`;

const MaxWidthContainer = styled("div")`
  max-width: 1024px;
  margin: auto;
`;

const Layout = ({ children }: { children?: any }) => (
  <FullHeight>
    <Header>
      <Nav />
    </Header>
    <Body>
      <MaxWidthContainer>{children}</MaxWidthContainer>
    </Body>
  </FullHeight>
);

export default Layout;
