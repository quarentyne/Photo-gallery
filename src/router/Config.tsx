import { Route, Routes } from 'react-router-dom';
import { Layout } from '../shared/components';
import { ROUTES } from '../shared/constants';

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
