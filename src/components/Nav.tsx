import styled from "@emotion/styled";
import { Link } from "gatsby";

const StyledNav = styled("nav")``;
const ElementList = styled("ul")``;
const NavElement = styled("li")``;
const NavLink = styled(Link)``;
const MailLink = styled("a")``;

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
        <MailLink href="mailto:samgray@gmail.com">Contact</MailLink>
      </NavElement>
    </ElementList>
  </StyledNav>
);

export default Nav;
