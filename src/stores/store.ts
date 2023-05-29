import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookStore from './bookStore';

const appReducer = combineReducers({
    books: bookStore,
})

export const store = configureStore({
    reducer: appReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;