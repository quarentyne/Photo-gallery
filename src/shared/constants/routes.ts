export enum ROUTES_PATHS {
  HOME = "/",
  USER = "/users/:username",
  TOPIC = "/topics/:id",
  NOT_FOUND = "*",
};

interface IRoute {
  path: string;
  component: React.ReactNode;
};

export const ROUTES: IRoute[] = [];