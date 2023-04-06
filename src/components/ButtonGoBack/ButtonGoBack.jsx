import React from 'react';
import PropTypes from 'prop-types';
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

ButtonGoBack.propTypes = {
  to: PropTypes.object,
};

export default ButtonGoBack;
