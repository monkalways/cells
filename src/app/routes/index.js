import React from 'react';
import { Route } from "react-router-dom";
import { TapToBegin } from '../tapToBegin';
import { CellManagement } from '../cellManagement';
import { RequiresAuth } from './enhancers';

const routes = (
  <Route path="">
    <Route exact path="/" component={TapToBegin} />
    <Route path="/dmu-cell/:cellName" component={RequiresAuth(TapToBegin)} />
    <Route path="/dmu-room/:usage" component={RequiresAuth(TapToBegin)} />
    <Route path="/cellManagement/:cellName" component={RequiresAuth(CellManagement)} />
    {/* <Route path="/roomManagement/:usage" component={RequiresAuth(ActivityRoomManagementContainer)} /> */}
    {/* <Route path="/detaineeProfile/:id" component={DetaineeProfileContainer} /> */}
  </Route>
)

// const routes = [
//   {
//     path: '/',
//     component: TapToBegin,
//     exact: true,
//   },
//   {
//     path: '/dmu-cell/:cellName',
//     example: '/dmu-cell/d2',
//     component: TapToBegin,
//     exact: true,
//   },
//   {
//     path: '/dmu-room/:usage',
//     example: '/dmu-room/bail hearing2',
//     component: TapToBegin,
//     exact: true,
//   }
//   // ,
//   // {
//   //   path: '/cellManagement/:cellName',
//   //   example: '/cellManagement/d2',
//   //   component: CellManagementContainer,
//   //   exact: true,
//   // }
//   // ,
//   // {
//   //   path: '/roomManagement/:usage',
//   //   example: '/roomManagement/fingerprinting',
//   //   component: ActivityRoomManagementContainer,
//   //   exact: true,
//   // },
//   // {
//   //   path: '/detaineeProfile/:id',
//   //   example: '/detaineeProfile/162323004000000603xxxxxx',
//   //   component: DetaineeProfile,
//   //   exact: true,
//   // }
// ];

export default routes;
