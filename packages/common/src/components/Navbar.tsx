"use client";
import React from "react";

import { Logo, Nav, NavItem, NavLink, NavList } from "@Styles/navbar";
import Link from "next/link";

const Navbar: React.FC = () => (
  <Nav>
    <Logo>Logo</Logo>
    <NavList>
      <NavItem>
        <Link href="#">
          <NavLink>Features</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/solutions">
          <NavLink>Solutions</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/docs">
          <NavLink>Docs</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/blog">
          <NavLink>Blog</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/ci-pricing">
          <NavLink>CI Pricing</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/resources">
          <NavLink>Resources</NavLink>
        </Link>
      </NavItem>
    </NavList>
    <NavList>
      <NavItem>
        <Link href="/app">
          <NavLink>Go to App</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/contact">
          <NavLink>Contact</NavLink>
        </Link>
      </NavItem>
    </NavList>
  </Nav>
);

export default Navbar;
