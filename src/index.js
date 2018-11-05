import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './app/App';
import configureStore from './store';
import theme from './mui-theme';

const history = createBrowserHistory();

const reduxStore = configureStore(history, window.REDUX_INITIAL_DATA);

const RootHtml = () => (
  <ReduxProvider store={reduxStore}>
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </MuiThemeProvider>
    </CssBaseline>
  </ReduxProvider>
);
ReactDOM.render(<RootHtml />, document.getElementById('root'));
