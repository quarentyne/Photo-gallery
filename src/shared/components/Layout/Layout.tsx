import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavigationMenu } from '..';

export const Layout = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NavigationMenu />
      <Outlet context={{ searchQuery }} />
    </>
  );
};
