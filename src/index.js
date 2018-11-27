import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider as ReduxProvider } from 'react-redux';

import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import App from './app/App';
import Notification from './app/common/Notification';
import configureStore from './store';
import theme from './mui-theme';

const history = createBrowserHistory();

const reduxStore = configureStore(history, window.REDUX_INITIAL_DATA);

const rootEl = document.getElementById('root');

// eslint-disable-next-line react/no-render-return-value
const render = (Component) => ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
        <Notification />
      </MuiThemeProvider>
    </CssBaseline>
  </ReduxProvider>,
  rootEl,
);

render(App);

if (module.hot) {
  module.hot.accept('./app/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app/App').default;
    render(NextApp);
  });
}
