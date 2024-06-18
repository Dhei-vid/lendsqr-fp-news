import {configureStore} from '@reduxjs/toolkit';
import newsSlice from './news-slice';

export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
