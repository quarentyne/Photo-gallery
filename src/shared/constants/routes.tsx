import { Home } from '../../pages/Home/Home';
import { Photo } from '../../pages/Photo/Photo';
import { User } from '../../pages/User/User';

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
  {
    path: ROUTES_PATHS_TEMPLATE.PHOTO,
    component: <Photo />,
  },
  {
    path: ROUTES_PATHS_TEMPLATE.USER,
    component: <User />,
  },
];

export enum ROUTES_PATHS {
  HOME = '/',
  TOPIC = '/topic/',
  USER = '/users/',
  PHOTO = '/photos/',
}
