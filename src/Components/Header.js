import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";
import useAdminProvider from "../store/AdminProvider/useAdminProvider";

const Header = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAdminLoggedIn } = useAdminProvider();

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    window.localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavLink className={"navbar-brand"} to={routes.home}>
          Verizon
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                className={"nav-link"}
                activeClassName={"active"}
                to={routes.home}
              >
                Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <b>Real Estate</b>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Rent</DropdownItem>
                <DropdownItem>Buy</DropdownItem>
                <DropdownItem>Share</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <b>Automobiles</b>
                </DropdownItem>
                <DropdownItem>Cars</DropdownItem>
                <DropdownItem>Bikes</DropdownItem>
                <DropdownItem>Cycles</DropdownItem>
                <DropdownItem>
                  <DropdownItem divider />
                  <b>Electronics</b>
                </DropdownItem>
                <DropdownItem>Phones</DropdownItem>
                <DropdownItem>Laptop</DropdownItem>
                <DropdownItem>PCs</DropdownItem>
                <DropdownItem>Others</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                className={"nav-link"}
                activeClassName={"active"}
                to={routes.authors}
              >
                Offers
                
              </NavLink>
            </NavItem>
            {isAdminLoggedIn ? (
              <NavItem>
                <NavLink
                  className={"nav-link"}
                  activeClassName={"active"}
                  to={routes.newPost}
                >
                  New Post
                </NavLink>
              </NavItem>
            ) : null}
          </Nav>
          {isAdminLoggedIn ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <NavLink
              activeClassName="active"
              className="nav-link"
              to={routes.adminLogin}
            >
              Login
            </NavLink>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
