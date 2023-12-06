import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  Storage,
} from 'redux-persist';

import { api } from '../services/api';
import theme from './theme';
import userReducer from './userReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';


const reducers = combineReducers({
  user: userReducer,
  theme,
  [api.reducerPath]: api.reducer,
});


export const reduxStorage: Storage = {
  setItem: (key, value) => {
    return Promise.resolve(true);
  },
  getItem: key => {
    return Promise.resolve();
  },
  removeItem: key => {
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'auth', 'user'],
};




const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);

    // if (__DEV__ && !process.env.JEST_WORKER_ID) {
    //   const createDebugger = require('redux-flipper').default;
    //   middlewares.push(createDebugger());
    // }

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
