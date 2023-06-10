import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

//createSlice => reducer의 이름, 초기상태, reducers를 간단하게 만들 수 있음
//createSlice안에 reducers!
export const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers:{
    increment: (state)=>{
        state.value += 1
    },
    decrement: (state)=>{
        state.value -=  1   
    }, 
    incrementByAmount: (state, action) =>{
    state.value += action.payload
    },
   },
   
})

//counterSlice.action
//createSlice에서 만든 것을 바탕으로 action을 추출해낼수가 있음
export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer;