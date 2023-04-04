import styled from 'styled-components';

export const ReviewsDoesNotExist = styled.p`
  max-width: calc(100vw - 48px);
  font-size: 25px;
  padding: 15px;
  text-align: center;
`;

export const ReviewsList = styled.ul`
  max-width: calc(100vw - 48px);
  padding: 15px 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const ReviewsListItem = styled.li`
  margin-bottom: 8px;
  padding: 4px 8px;
  border: 2px solid rgb(80, 200, 120);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
`;
export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 15px 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const CastListItem = styled.li`
  background-color: #50c878;
  border: 1px #102818;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const ItemInfoWrapper = styled.div`
  padding: 4px 8px;
  color: white;
  text-align: center;
`;

export const ItemInfoName = styled.p`
  text-transform: uppercase;
`;

export const ItemInfoCharacter = styled.p`
  font-size: 16px;
`;
