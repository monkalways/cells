import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import Home from './Home';

const App = () => (
  <React.Fragment>
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route component={Home} />
    </Switch>
  </React.Fragment>
);

export default App;
