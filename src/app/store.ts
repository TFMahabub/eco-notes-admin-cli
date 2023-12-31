import { configureStore } from '@reduxjs/toolkit';
import { api } from '../feauters/api/apiSlice';
import modalReducer from '../feauters/modal/modalSlice';
import navbarSliceReducer from '../feauters/navbar/navbarSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarSliceReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
