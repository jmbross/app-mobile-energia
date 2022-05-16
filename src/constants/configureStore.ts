import { applyMiddleware, createStore, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import rootReducer from '@/stores/index';
import rootSaga from '@/sagas/index';

const debug = process.env.APP_ENV !== 'production';
const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  whitelist: ['auth', 'enrollment', 'main', 'dashboard', 'usagePattern', 'messages', 'setting', 'temporary'],
  storage,
};

const sagaMiddleware = createSagaMiddleware({
  context: {
    history,
  },
});
const middlewares = [sagaMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

const bindMiddleware = (middleware: Middleware[]) => {
  if (debug) {
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const store = createStore(persistedReducer, bindMiddleware([...middlewares]));
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
// persistor.purge();

export { store, persistor, history };
