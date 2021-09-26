/* eslint-disable react/prop-types */
import React from 'react';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';

const HeaderHamburgerButton = ({ menuNavToggle, menuNavOpen }) =>
  // return different buttons depending on if the nav is open
  menuNavOpen ? (
    <button
      type="button"
      className="nav-button"
      onClick={() => menuNavToggle()}
    >
      <IoCloseSharp className="menu-icon" />

      <div className="nav-button-text">close</div>
    </button>
  ) : (
    <button
      type="button"
      className="nav-button"
      onClick={() => menuNavToggle()}
    >
      <IoMenuSharp className="menu-icon" />
      <div className="nav-button-text">menu</div>
    </button>
  );

export default HeaderHamburgerButton;
