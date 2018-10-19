import TapToBeginContainer from '../TapToBegin';
import CellManagementContainer from '../CellManagement';
import requiresAuth from './enhancers';

const routes = [
  {
    path: '/',
    component: TapToBeginContainer,
    exact: true,
  },
  {
    path: '/dmu-cell/:cellName',
    component: requiresAuth(TapToBeginContainer),
    exact: true,
  },
  {
    path: '/dmu-room/:usage',
    component: requiresAuth(TapToBeginContainer),
    exact: true,
  },
  {
    path: '/cellManagement/:cellName',
    component: requiresAuth(CellManagementContainer),
    exact: true,
  },
  // {
  //   path: '/roomManagement/:usage',
  //   component: requiresAuth(ActivityRoomManagement),
  //   exact: true,
  // },
  // {
  //   path: '/detaineeProfile/:id',
  //   component: requiresAuth(DetaineeProfile),
  //   exact: true,
  // }
];

export default routes;
