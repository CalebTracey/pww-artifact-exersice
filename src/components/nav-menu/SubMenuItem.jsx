import React from 'react';
import PropTypes from 'prop-types';

const SubMenuItem = ({ item }) => (
  <div className="sub-menu-item">{item.title}</div>
);

SubMenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default SubMenuItem;
