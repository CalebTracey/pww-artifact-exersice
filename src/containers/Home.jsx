import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import NavigationMenu from '../components/nav-menu/NavigationMenu';

const Home = () => {
  const [menuNavOpen, setMenuNavOpen] = useState(false);

  const menuNavToggle = () => setMenuNavOpen(!menuNavOpen);
  return (
    <div className="home">
      <Header menuNavToggle={menuNavToggle} menuNavOpen={menuNavOpen} />
      {menuNavOpen && <NavigationMenu />}
      <Content />
    </div>
  );
};
export default Home;
