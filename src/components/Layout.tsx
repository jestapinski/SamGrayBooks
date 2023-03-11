import { ReactNode } from "react";
import Nav from "./Nav";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Nav />
    <main>{children}</main>
  </>
);

export default Layout;
