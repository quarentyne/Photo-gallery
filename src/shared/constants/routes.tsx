import { Home, Topic } from '../../pages';

enum ROUTES_PATHS_TEMPLATE {
  HOME = '/',
  USER = '/users/:username',
  TOPIC = '/topics/:id',
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
    component: <Topic />,
  },
];

export enum ROUTES_PATHS {
  HOME = '/',
  USER = '/users/',
  TOPIC = '/topics/',
  PHOTO = '/photos/',
}
