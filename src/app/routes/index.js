import TapToBeginPage from '../TapToBeginPage';
import Cell from '../Cell';
import Detainee from '../Detainee';
import withAuthentication from './enhancers/withAuthentication';

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
    component: withAuthentication(Detainee),
    exact: false,
  },
];

export default routes;
