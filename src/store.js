import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import counterReducer from "../src/counter/counterSlice";

const reducers = combineReducers({
    counter: counterReducer,
})

const persistConfig ={
  key: 'counter',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

// configure store
// 간단하게 store를 만들 수 있도록 도와줌
// counterSlice에서 reducer 함수를 가져와서 스토어에 추가해줌
export const store = configureStore({
    reducer:persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})