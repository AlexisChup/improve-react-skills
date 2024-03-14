import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const commonClassNameNavLink = "me-4";

  return (
    <div>
      <header>
        <Navbar
          collapseOnSelect
          expand="md"
          className="d-flex fixed justify-content-between align-content-center align-items-center flex-row p-3 shadow"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-center align-content-center align-items-center">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? commonClassNameNavLink + " navbar-navlink-active"
                    : commonClassNameNavLink + " navbar-navlink"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="tasks-manager"
                className={({ isActive }) =>
                  isActive
                    ? commonClassNameNavLink + " navbar-navlink-active"
                    : commonClassNameNavLink + " navbar-navlink"
                }
              >
                Tasks Manager
              </NavLink>
              <NavLink
                to="errrror"
                className={({ isActive }) =>
                  isActive
                    ? commonClassNameNavLink + " navbar-navlink-active"
                    : commonClassNameNavLink + " navbar-navlink"
                }
              >
                No page
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <Outlet />
    </div>
  );
}
