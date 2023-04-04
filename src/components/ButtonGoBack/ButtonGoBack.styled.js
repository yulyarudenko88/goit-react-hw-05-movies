import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  gap: 4px;
  margin-top: 12px;
  margin-left: 12px;
  padding: 10px 20px;
  background-color: rgb(80, 200, 120);
  color: white;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid white;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: white;
    color: rgb(80, 200, 120);
    border: 1px solid rgb(80, 200, 120);
  }
`;