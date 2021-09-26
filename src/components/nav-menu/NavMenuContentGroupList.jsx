/* eslint-disable react/prop-types */
import React from 'react';
import NavMenuContentGroup from './NavMenuContentGroup';

const NavMenuContentGroupList = ({ contentGroups }) => {
  const listNode = contentGroups.map((group) => (
    <NavMenuContentGroup key={group.id} group={group} />
  ));

  return <div className="nav-menu-content-list">{listNode}</div>;
};
export default NavMenuContentGroupList;
