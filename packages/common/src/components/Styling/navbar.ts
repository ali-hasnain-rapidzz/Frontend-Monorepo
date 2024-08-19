import styled from 'styled-components';

export const Nav = styled.nav`
  margin-top: 8px;
  margin-left: 5px;
  margin-right: 20px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #eaeaea;
  border-radius: 15px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
`;

export const Logo = styled.div`
  img {
    margin-top: 15px;
    height: 70px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
