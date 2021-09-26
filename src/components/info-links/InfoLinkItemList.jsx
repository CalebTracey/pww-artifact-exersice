import React from 'react';
import PropTypes from 'prop-types';
import InfoLinkItem from './InfoLinkItem';

const InfoLinkItemList = ({ items }) =>
  items.map((item) => <InfoLinkItem key={item.id} item={item} />);

InfoLinkItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};
export default InfoLinkItemList;
