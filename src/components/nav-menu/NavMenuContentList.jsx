/* eslint-disable react/prop-types */
import React from 'react';
import NavMenuContentListItem from './NavMenuContentListItem';

// returns list of items within a content group
const NavMenuContentList = ({ items }) => {
  const listNode = items.map((item) => (
    <NavMenuContentListItem key={items.id} item={item} />
  ));

  return <div className="nav-menu-content-list">{listNode}</div>;
};
export default NavMenuContentList;
