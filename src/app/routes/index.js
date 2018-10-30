import TapToBeginPage from '../TapToBeginPage';
import Cell from '../Cell';

const routes = [
  {
    path: '/cells/:name',
    component: TapToBeginPage,
    exact: true,
  },
  {
    path: '/cells/:name/overview',
    component: Cell,
    exact: true,
  },
];

export default routes;
