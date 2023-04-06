import styled from 'styled-components';

export const SearchForm = styled.form`
  display: inline-flex;
  gap: 4px;
  margin-top: 12px;
  margin-left: 12px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 12px;
  font-family: inherit;
  border: 1px solid rgb(80, 200, 120);
  outline: none;

  &:hover,
  &:focus {
    border: 1px solid #08140c;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(80, 200, 120);
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-family: inherit;
  border-radius: 12px;
  padding: 10px 20px;
  border: 1px solid white;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: white;
    color: rgb(80, 200, 120);
    border: 1px solid rgb(80, 200, 120);
  }
`;
