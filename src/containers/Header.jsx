/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import HeaderHamburgerButton from '../components/header/HeaderHamburgerButton';
import HeaderText from '../components/header/HeaderText';
import RFALogo from '../images/RFA Logo Final.png';
import HeaderNavButtonList from '../components/header/HeaderNavButtonList';
import HeaderSearchButton from '../components/header/HeaderSearchButton';

const buttons = [
  { id: 'hb-1', title: 'about us' },
  { id: 'hb-2', title: 'events' },
  { id: 'hb-3', title: 'boards & committees' },
];
const Header = ({ menuNavToggle, menuNavOpen }) => {
  const [headerSearchOpen, setHeaderSearchOpen] = useState(false);
  const headerSearchToggle = () => setHeaderSearchOpen(!headerSearchOpen);

  return (
    <header className="header">
      <div className="header-nav-icon-wrapper">
        <HeaderHamburgerButton
          menuNavOpen={menuNavOpen}
          menuNavToggle={menuNavToggle}
        />
        <div className="icon-wrapper">
          <img
            style={{
              width: 'auto',
              height: '8.5vh',
              minHeight: '4rem',
            }}
            src={RFALogo}
            alt="logo"
          />
        </div>
      </div>
      <div className="header-wrapper">
        <HeaderText />
        <div className="header-nav-button-wrapper">
          <HeaderNavButtonList buttons={buttons} />
        </div>
      </div>
      <HeaderSearchButton
        headerSearchToggle={headerSearchToggle}
        headerSearchOpen={headerSearchOpen}
      />
    </header>
  );
};
export default Header;
