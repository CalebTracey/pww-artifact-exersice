import React from 'react';
import HeaderNavButton from './HeaderNavButton';

const HeaderNavButtonList = ({ buttons }) =>
  buttons.map((button) => (
    <HeaderNavButton key={button.id} title={button.title} />
  ));

export default HeaderNavButtonList;
