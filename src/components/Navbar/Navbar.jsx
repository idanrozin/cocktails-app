import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import S from './styles';

const Tabs = [
  { id: 'home', path: '/', text: 'Home' },
  { id: 'menu', path: '/menu', text: 'Menu' },
];
const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    if (!selectedTab) {
      const { pathname } = window.location;
      const validPathname = Tabs.some((t) => t.path === pathname)
        ? pathname
        : '/';
      setSelectedTab(validPathname);
    }
    return () => {
      setSelectedTab(null);
    };
  }, []);

  return (
    <S.Nav>
      <S.List>
        {Tabs.map((tab) => (
          <S.ListItem
            key={tab.id}
            selected={selectedTab === tab.path}
            onClick={() => setSelectedTab(tab.path)}
          >
            <Link to={tab.path}>{tab.text}</Link>
          </S.ListItem>
        ))}
      </S.List>
    </S.Nav>
  );
};
export default Navbar;
