import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
// import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(history, initialState) {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    applyMiddleware(
      thunk,
      routerMiddleware(history),
      // createLogger({
      // ...options
      // }),
    ),
  );
}
