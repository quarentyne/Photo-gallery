import { Home } from '../../pages/Home/Home';

enum ROUTES_PATHS_TEMPLATE {
  HOME = '/',
  USER = '/users/:username',
  TOPIC = '/topic/:topicId',
  PHOTO = '/photos/:id',
  NOT_FOUND = '*',
}

interface IRoute {
  path: string;
  component: React.ReactNode;
}

export const ROUTES: IRoute[] = [
  {
    path: ROUTES_PATHS_TEMPLATE.HOME,
    component: <Home />,
  },
  {
    path: ROUTES_PATHS_TEMPLATE.TOPIC,
    component: <Home />,
  },
];

export enum ROUTES_PATHS {
  HOME = '/',
  TOPIC = '/topic/',
  USER = '/users/',
  PHOTO = '/photos/',
}
