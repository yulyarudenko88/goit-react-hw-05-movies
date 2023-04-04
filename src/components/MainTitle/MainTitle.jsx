import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './MainTitle.styked';

const MainTitle = ({ children }) => <Title>{children}</Title>;

MainTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainTitle;
