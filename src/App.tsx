import { useEffect } from 'react';
import { getTopics } from './modules/Topics';
import { RouterConfig } from './router';
import { useAppDispatch } from './shared/hooks';
import { GlobalStyle } from './styles';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTopics());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <RouterConfig />
    </>
  );
};

export default App;
