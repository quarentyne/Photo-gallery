import { Outlet } from 'react-router-dom';
import { Header, NavigationMenu } from '../components';

export const Layout = () => {
  return (
    <>
      <Header />
      <NavigationMenu />
      <Outlet />
    </>
  );
};
