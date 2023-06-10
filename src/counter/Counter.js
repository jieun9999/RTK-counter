import React from "react";
//리덕스 훅
import { useSelector, useDispatch } from "react-redux"; 
// createSlice에서 추출한 action
import {increment, decrement, incrementByAmount } from './counterSlice';
import { useState } from "react";

export function Counter(){
    const count= useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')
    //먼저 인풋에 들어갈 초기값과 변경함수를 설정해둠

   return(
    <div>
        <div>
            <span>{count}</span>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <input value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}></input>
            {/*input 창이 사용자가 입력한 내용을 서버에 보내는 값으로 가지게함 */}
            <button onClick={()=>dispatch(incrementByAmount(Number(incrementAmount)))}>Add Amount</button>
            {/*action.payload를 incrementByAmount의 () 안에 넣음 */}
        </div>
    </div>
   )
}

