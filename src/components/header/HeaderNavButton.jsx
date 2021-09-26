import React from 'react';
import PropTypes from 'prop-types';

const HeaderNavButton = ({ title }) => (
  <div className="header-nav-button">{title}</div>
);

HeaderNavButton.propTypes = {
  title: PropTypes.string.isRequired,
};
export default HeaderNavButton;
