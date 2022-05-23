import { Nav, NavbarBrand, Navbar, NavbarToggler, Collapse, NavItem, NavLink} from "reactstrap"
import React from "react";
import CartSummary from "../cart/CartSummary";
export default class Navi extends React.Component {

  render() {
    return (
      <div>
        <Navbar
          color="light"
          expand="md"
          light
        >
          <NavbarBrand href="/">
            Hayribaba
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink href="/components/">
                  birbakbidahabakarsın
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  hopburdayım
                </NavLink>
              </NavItem>
            </Nav>
            </Collapse>
          <CartSummary/>
        </Navbar>


      </div>
    )
  }
}
