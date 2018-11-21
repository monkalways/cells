import TapToBegin from '../TapToBegin';
import Home from '../Home';
import Cell from '../Cell';
import Detainee from '../Detainee';
import ActivityRoom from '../ActivityRoom';
import withAuthentication from './enhancers/withAuthentication';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/detainees/:id',
    // component: withAuthentication(Detainee),
    component: Detainee,
    exact: true,
  },
  {
    path: '/:first/:second',
    component: TapToBegin,
    exact: true,
  },
  {
    path: '/cells/:name/home',
    component: Cell,
    exact: false,
  },
  {
    path: '/activity-rooms/:usage/home',
    component: ActivityRoom,
    exact: true,
  },
];

export default routes;
