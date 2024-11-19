import React from "react";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import { FiMail, FiLinkedin } from "react-icons/fi";

function NavBar(props) {
  return (
    <div>
      <Navbar color="light" light expand="md" className="px-90">
        {/* Left Side Links */}
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projects">Projects</NavLink>
          </NavItem>
        </Nav>

        {/* Right Side Contact Links */}
        <Nav navbar>
          <NavItem>
            <NavLink href="mailto:muthukumar143412@gmail.com" target="_blank">
              <FiMail size="20px" className="me-1" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://www.linkedin.com/in/muthu-kumar-venkatesh-564199211/"
              target="_blank"
            >
              <FiLinkedin size="20px" className="me-1" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
