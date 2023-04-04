import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px;
  background-color: #307848;
  color: white;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #50c878;
  }

  &.active {
    text-decoration: underline;
  }
`;
