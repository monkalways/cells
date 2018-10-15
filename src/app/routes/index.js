import { TapToBegin } from '../tapToBegin';
import { CellManagement } from '../cellManagement';
import { RequiresAuth } from './enhancers';

const routes = [
  {
    path: '/',
    component: TapToBegin,
    exact: true,
  },
  {
    path: '/dmu-cell/:cellName',
    component: RequiresAuth(TapToBegin),
    exact: true,
  },
  {
    path: '/dmu-room/:usage',
    component: RequiresAuth(TapToBegin),
    exact: true,
  },
  {
    path: '/cellManagement/:cellName',
    component: RequiresAuth(CellManagement),
    exact: true,
  },
  // {
  //   path: '/roomManagement/:usage',
  //   component: RequiresAuth(ActivityRoomManagement),
  //   exact: true,
  // },
  // {
  //   path: '/detaineeProfile/:id',
  //   component: RequiresAuth(DetaineeProfile),
  //   exact: true,
  // }
];

export default routes;
