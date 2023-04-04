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

export const MovieDetailsWrapper = styled.section`
  display: flex;
  padding: 12px;
  align-items: center;
`;

export const PosterImage = styled.img`
  margin-right: 20px;
  max-width: 320px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const MovieDetailsContent = styled.div`
  /* max-width: 500px; */
  padding: 4px 8px;
  border: 2px solid rgb(80, 200, 120);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);

  h1 {
    text-align: center;
    margin-bottom: 8px;
  }

  h2,
  h3 {
    font-size: 25px;
  }

  p {
    font-size: 20px;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    gap: 12px;
    list-style: none;
  }

  ul > li {
    font-size: 20px;
  }
`;

export const AdditionalInfoWrapper = styled.section`
  padding: 12px;
  background-color: rgb(80, 200, 120);
  color: white;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
`;

export const AdditionalInfoLink = styled(Link)`
  display: inline-flex;
  padding: 10px 20px;
  color: white;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid white;
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: white;
    color: rgb(80, 200, 120);
  }
`;
