import React from 'react';
import { DEVICES, ROUTES_PATHS } from './shared/constants';
import { GlobalStyle } from './styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        {DEVICES.DESKTOP} {ROUTES_PATHS.HOME}
      </div>
    </>
  );
};

export default App;
