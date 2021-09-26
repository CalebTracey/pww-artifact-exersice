import React from 'react';
import PropTypes from 'prop-types';
import SubMenuItem from './SubMenuItem';

const SubMenuItemList = ({ items }) => {
  // map over objects and if current is not
  // first in the list, add a divider on top.
  const listNode = items.map((item, idx) =>
    idx > 0 ? (
      <>
        <hr
          style={{
            border: 'none',
            color: '#cccccc',
            backgroundColor: '#cccccc',
            height: '.75px',
          }}
        />
        <SubMenuItem key={item.id} item={item} />
      </>
    ) : (
      <SubMenuItem key={item.id} item={item} />
    )
  );
  return <div className="sub-menu-item-list">{listNode}</div>;
};

SubMenuItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default SubMenuItemList;
