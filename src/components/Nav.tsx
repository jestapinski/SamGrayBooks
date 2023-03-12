import styled from "@emotion/styled";
import { Link } from "gatsby";
import Wave from "react-wavify";

const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
};

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
    ${activeStyle}
  }
`;

const Subtitle = styled("h4")`
  position: absolute;
  bottom: 0px;
  right: 16px;
`;

const StyledWave = styled(Wave)`
  position: absolute;
  bottom: 0;
  height: 30px;
`;

export const NAV_HEIGHT = "180px";

const NavWrapper = styled("div")`
  height: ${NAV_HEIGHT};
  position: relative;
`;

const MailLink = NavLink.withComponent("a");

const Nav = () => (
  <NavWrapper>
    <StyledNav>
      <ElementList>
        <NavElement>
          <NavLink to="/" activeStyle={activeStyle}>
            Books
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink to="/blog" activeStyle={activeStyle}>
            Blog
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink to="/merch" activeStyle={activeStyle}>
            Merch
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink to="/author" activeStyle={activeStyle}>
            Author
          </NavLink>
        </NavElement>
        <NavElement>
          {/* @ts-ignore */}
          <MailLink href="mailto:samgray@gmail.com">Contact</MailLink>
        </NavElement>
      </ElementList>
    </StyledNav>
    <Subtitle>A book about body positivity and confidence</Subtitle>
    <StyledWave
      fill="black"
      paused={true}
      options={{
        height: 15,
        amplitude: 10,
        points: 23,
      }}
    />
  </NavWrapper>
);

export default Nav;
