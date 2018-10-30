import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

const App = () => (
  <main>
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </main>
);

export default App;
