import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { StyledLink } from "./ButtonGoBack.styled";


const ButtonGoBack = ({to}) => (
  <StyledLink to={to}>
    <FiArrowLeft
      style={{
        width: '20px',
        height: '20px',
      }}
    />
    Go back
  </StyledLink>
);

export default ButtonGoBack;
