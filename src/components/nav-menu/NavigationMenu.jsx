import React from 'react';
import NavMenuContentGroupList from './NavMenuContentGroupList';
import SubMenu from './SubMenu';

const contentGroups = [
  {
    id: 'cg-1',
    title: 'data & research',
    items: [
      'economy',
      'state finances',
      'education',
      'healthcare',
      'local government',
      'population and demographics',
      'state register calculations',
      'presentations',
    ],
  },
  {
    id: 'cg-2',
    title: 'legislative fiscal impacts',
    items: [
      'current general assembly session',
      'previous general assembly session',
      'forms',
    ],
  },
  {
    id: 'cg-3',
    title: 'geography & mapping',
    items: [
      'transportation carrier network (uber)',
      'SC real time network',
      'SC state GIS',
      'maps',
      'interactive mapping',
      'statewide aerial imagery',
    ],
  },
  {
    id: 'cg-4',
    title: 'programs & services',
    items: [
      'precinct demographics and redistricting',
      'state 911 program',
      'data services and online solutions',
      'geodetic survey',
      'fiscal analysis government',
      '202 census',
    ],
  },
];

const NavigationMenu = () => (
  <div className="navigation-menu">
    <SubMenu />
    <div className="group-list-wrapper">
      <NavMenuContentGroupList contentGroups={contentGroups} />
    </div>
  </div>
);

export default NavigationMenu;
