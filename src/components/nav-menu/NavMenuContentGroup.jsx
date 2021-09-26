/* eslint-disable react/prop-types */
import React from 'react';
import NavMenuContentListHeader from './NavMenuContentListHeader';
import NavMenuContentListItem from './NavMenuContentListItem';

// returns a list of content groups. (headers + item list)
const NavMenuContentGroup = ({ group }) => {
  const { title, items } = group;
  return (
    <div className="nav-menu-content-group">
      <NavMenuContentListHeader title={title} />
      {items.map((item) => (
        <NavMenuContentListItem item={item} />
      ))}
    </div>
  );
};
export default NavMenuContentGroup;
