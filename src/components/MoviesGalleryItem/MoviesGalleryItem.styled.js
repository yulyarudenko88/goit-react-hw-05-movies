import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieListItem = styled.li`
  background-color: #50c878;
  
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const MovieLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;

  img {
    display: block;
    width: 100%;
  }

  p {
    padding: 4px 8px;
    color: white;
    text-transform: uppercase;
    text-align: center;
  }
`;

