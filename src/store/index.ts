import { configureStore } from '@reduxjs/toolkit';

import rootSlice from './slices/root.slice';

const store = configureStore({
  reducer: rootSlice,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
