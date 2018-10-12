import React from 'react';
import { Route } from "react-router-dom";
import routes from './routes';
import { TapToBegin } from './tapToBegin';
import { CellManagement } from './cellManagement';
import { RequiresAuth } from 'app/routes/enhancers';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <Route exact path="/" component={TapToBegin} />
      <Route path="/dmu-cell/:cellName" component={RequiresAuth(TapToBegin)} />
      <Route path="/dmu-room/:usage" component={RequiresAuth(TapToBegin)} />
      <Route path="/cellManagement/:cellName" component={RequiresAuth(CellManagement)} />
    </div>
  </div>
);

export default App;
