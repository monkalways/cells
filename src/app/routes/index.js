import TapToBegin from '../TapToBegin';
import Home from '../Home';
import Cell from '../Cell';
import Detainee from '../Detainee';
import withAuthentication from './enhancers/withAuthentication';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/cells/:name',
    component: TapToBegin,
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
