import styled from "@emotion/styled";
import { Link } from "gatsby";
import Wave from "react-wavify";
import { slide as Menu } from "react-burger-menu";

const activeStyle = {
  fontWeight: "bold",
  textDecoration: "underline",
  textDecorationStyle: "wavy",
};

const StyledNav = styled("nav")`
  margin: 0 32px;
`;
const ElementList = styled("ul")`
  display: flex;
  margin: 0;
  padding-top: 32px;
  justify-content: space-between;
`;
const NavElement = styled("li")`
  list-style: none;
  @media screen and (max-width: 930px) {
    margin-top: 18px;
    padding-left: 18px;
  }
`;
const NavLink = styled(Link)`
  font-size: 36px;
  color: black;
  text-decoration: none;
  :visited {
    text-decoration: none;
    color: inherit;
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

const BuyLinkImage = styled("a")`
  :hover {
    opacity: 0.6;
  }
`;

export const NAV_HEIGHT = "180px";

const NavWrapper = styled("div")`
  height: ${NAV_HEIGHT};
  position: relative;
  @media screen and (max-width: 930px) {
    height: 32px;
  }
`;

const StyledMenu = styled(Menu)``;
const StyledMenuContainer = styled("div")`
  @media screen and (min-width: 930px) {
    display: none;
  }
  position: relative;
  height: 32px;
  width: 40px;
  opacity: 1;
  top: 8px;
  .bm-overlay {
    top: 0;
  }
  .bm-menu {
    background-color: paleturquoise;
  }
  .bm-menu-wrap {
    top: 0;
  }
  span {
    left: 8px !important;
    background-color: black;
  }
`;

const StyledDesktopMenuContainer = styled("div")`
  @media screen and (max-width: 930px) {
    display: none;
  }
`;

const MailLink = NavLink.withComponent("a");

const NavLinks = () => (
  <>
    <NavElement>
      <NavLink to="/" activeStyle={activeStyle}>
        Books
      </NavLink>
    </NavElement>
    <NavElement>
      <NavLink to="/news" activeStyle={activeStyle}>
        News
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
  </>
);

const Nav = () => (
  <>
    <StyledMenuContainer>
      <StyledMenu>
        <NavLinks />
        <NavElement>
          {/* @ts-ignore */}
          <MailLink href="https://www.amazon.com/dp/B0C4K3QCDC">
            Buy Now
          </MailLink>
        </NavElement>
      </StyledMenu>
    </StyledMenuContainer>

    <NavWrapper>
      <StyledDesktopMenuContainer>
        <StyledNav>
          <ElementList>
            <NavLinks />
            <BuyLinkImage href="https://www.amazon.com/dp/B0C4K3QCDC">
              <img src="/images/cover.png" height="80px" width="103px" />
            </BuyLinkImage>
          </ElementList>
        </StyledNav>
        <Subtitle>A book about body positivity and confidence</Subtitle>
      </StyledDesktopMenuContainer>
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
  </>
);

export default Nav;
