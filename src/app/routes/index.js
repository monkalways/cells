import TapToBeginPage from '../TapToBeginPage';
import Cells from '../Cells';

const routes = [
  {
    path: '/cells/:name',
    component: TapToBeginPage,
    exact: true,
  },
  {
    path: '/cells/:name/overview',
    component: Cells,
    exact: true,
  },
];

export default routes;
