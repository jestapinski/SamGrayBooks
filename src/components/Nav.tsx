import styled from "@emotion/styled";
import { Link } from "gatsby";
import Wave from "react-wavify";

const StyledNav = styled("nav")`
  width: 70%;
`;
const ElementList = styled("ul")`
  display: flex;
  margin: 0;
  padding-top: 32px;
  justify-content: space-between;
`;
const NavElement = styled("li")`
  list-style: none;
`;
const NavLink = styled(Link)`
  font-size: 24px;
  color: black;
  text-decoration: none;
  :visited {
    text-decoration: none;
  }
  :active,
  :hover {
    text-decoration: underline;
  }
`;

const StyledWave = styled(Wave)`
  height: 30px;
`;

const MailLink = NavLink.withComponent("a");

export const NAV_HEIGHT = "94px";

const Nav = () => (
  <div style={{ height: NAV_HEIGHT }}>
    <StyledNav>
      <ElementList>
        <NavElement>
          <NavLink to="/">Books</NavLink>
        </NavElement>
        <NavElement>
          <NavLink to="/blog">Blog</NavLink>
        </NavElement>
        <NavElement>
          <NavLink to="/merch">Merch</NavLink>
        </NavElement>
        <NavElement>
          <NavLink to="/author">Author</NavLink>
        </NavElement>
        <NavElement>
          {/* @ts-ignore */}
          <MailLink href="mailto:samgray@gmail.com">Contact</MailLink>
        </NavElement>
      </ElementList>
    </StyledNav>
    <StyledWave
      fill="black"
      paused={true}
      options={{
        height: 15,
        amplitude: 10,
        points: 23,
      }}
    />
  </div>
);

export default Nav;
