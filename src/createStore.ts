import { createStore as createReduxStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import infoPage from '@/entities/infoPage';

/**
 * Creates a new Redux store of this application.
 */
const createStore = () => {
  const reducers = combineReducers({
    ...infoPage(),
  });

  const middlewares = applyMiddleware(thunk);

  const store = createReduxStore(reducers, middlewares);
  return store;
};

// Export.
export default createStore;
