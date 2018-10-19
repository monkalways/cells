import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './app/App';
import configureStore from './store';

const history = createBrowserHistory();

const reduxStore = configureStore(history, window.initialReduxState);

const RootHtml = () => (
  <Provider store={reduxStore}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
ReactDOM.render(<RootHtml />, document.getElementById('root'));
