import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

export default function configureStore(history, initialState) {
  const middlewares = [thunkMiddleware, routerMiddleware(history)];
  return createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
}
