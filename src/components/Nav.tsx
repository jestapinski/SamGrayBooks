import styled from "@emotion/styled";
import { Link } from "gatsby";

const StyledNav = styled("nav")`
  width: 70%;
`;
const ElementList = styled("ul")`
  display: flex;
  margin: 0;
  height: 160px;
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
const MailLink = NavLink.withComponent("a");

const Nav = () => (
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
);

export default Nav;
