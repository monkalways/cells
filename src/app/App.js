import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <React.Fragment>
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </React.Fragment>
);

export default App;
