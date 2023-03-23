import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../shared/constants';
import { Layout } from '../shared/Layout';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {ROUTES.map(({ path, component }, key) => (
          <Route path={path} element={component} key={key} />
        ))}
      </Route>
    </Routes>
  );
};
