import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/counter/counterSlice";

// configure store
// 간단하게 store를 만들 수 있도록 도와줌
// counterSlice에서 reducer 함수를 가져와서 스토어에 추가해줌
export const store = configureStore({
    reducer:{
        counter: counterReducer,
        }
})