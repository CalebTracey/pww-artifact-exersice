import React from 'react';
import PropTypes from 'prop-types';

const HeaderNavButton = ({ title }) => (
  <span className="header-nav-button">{title}</span>
);

HeaderNavButton.propTypes = {
  title: PropTypes.string.isRequired,
};
export default HeaderNavButton;
