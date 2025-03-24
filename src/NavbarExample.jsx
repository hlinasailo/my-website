import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from "@coreui/react";

export const NavbarExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" colorScheme="light" className="bg-light">
      <CContainer fluid>
        <CNavbarBrand>
          <Link to="/" className="navbar-brand">
            NEW
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-clipboard2-data"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
              <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
              <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1" />
            </svg>
            SERG
          </Link>
        </CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem>
              <CNavLink href="./goo/index.js">Sign up</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Chat-ME</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item">
              <CDropdownToggle color="secondary">News</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">AI</CDropdownItem>
                <CDropdownItem href="#">IOT</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Articles</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" className="me-2" placeholder="Search" />
            <CButton type="submit" color="success" variant="outline">
              Search
            </CButton>
          </CForm>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};