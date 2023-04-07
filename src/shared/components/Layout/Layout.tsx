import { Outlet } from 'react-router-dom';
import { Header, NavigationMenu } from '..';

export const Layout = () => {
  return (
    <>
      <Header />
      <NavigationMenu />
      <Outlet />
    </>
  );
};
