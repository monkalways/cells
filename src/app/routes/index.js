import TapToBeginPage from '../TapToBeginPage';
import Cell from '../Cell';
import Detainee from '../Detainee';

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
  {
    path: '/detainees/:id',
    component: Detainee,
    exact: false,
  },
];

export default routes;
