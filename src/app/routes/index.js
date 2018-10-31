import TapToBeginPage from '../TapToBeginPage';
import Cell from '../Cell';

const routes = [
  {
    path: '/cells/:name',
    component: TapToBeginPage,
    exact: true,
  },
  {
    path: '/cells/:name/home',
    component: Cell,
    exact: false,
  },
];

export default routes;
