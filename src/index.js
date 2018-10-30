import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './app/App';
import configureStore from './store';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const RootHtml = () => (
  <ReduxProvider store={reduxStore}>
    <CssBaseline>
      <Router>
        <App />
      </Router>
    </CssBaseline>
  </ReduxProvider>
);
ReactDOM.render(<RootHtml />, document.getElementById('root'));
