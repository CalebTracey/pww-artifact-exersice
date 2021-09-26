/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const InfoLinkItem = ({ item }) => (
  <div className="info-link-item">
    <img
      style={{ fontFamily: 'OpenSans', color: '#c3c3c3' }}
      src={item.image}
      alt={item.alt}
    />
    <p className="info-link-item-text">{item.title}</p>
  </div>
);

InfoLinkItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
export default InfoLinkItem;
