import React from 'react';
import SubMenuList from './SubMenuItemList';

const items = [
  { id: 'ni-1', title: 'home' },
  { id: 'ni-2', title: 'news & events' },
  { id: 'ni-3', title: 'about us' },
  { id: 'ni-3', title: 'contact us' },
  { id: 'ni-3', title: 'boards & committees' },
];

const SubMenu = () => (
  <div className="sub-menu">
    <SubMenuList items={items} />
  </div>
);

export default SubMenu;
