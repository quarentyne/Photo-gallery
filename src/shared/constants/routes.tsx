import { Home } from '../../pages/Home/Home';
import { Photo } from '../../pages/Photo/Photo';
import { User } from '../../pages/User/User';

export enum ROUTES_PATHS {
  HOME = '/',
  TOPIC = '/topic',
  USER = '/users',
  PHOTO = '/photos',
  SEARCH = '/search',
}

interface IRoute {
  path: string;
  component: React.ReactNode;
}

export const ROUTES: IRoute[] = [
  {
    path: ROUTES_PATHS.HOME,
    component: <Home />,
  },
  {
    path: `${ROUTES_PATHS.TOPIC}/:topicId`,
    component: <Home />,
  },
  {
    path: `${ROUTES_PATHS.PHOTO}/:id`,
    component: <Photo />,
  },
  {
    path: `${ROUTES_PATHS.USER}/:username`,
    component: <User />,
  },
];
