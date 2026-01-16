import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { incrementA, incrementB, reset } from "../redux/features/counterSlice";

const Counter = () => {

    let counter = useSelector(state => state.counter)
    let dispatch = useDispatch();

    // console.log(counter);



  return (
    <>
        <h1>A: {counter.counterA.a} </h1>
        <h1>A: {counter.counterB.b} </h1>


        <button onClick={()=>dispatch(incrementA(100))}>Counter A</button>
        <button onClick={()=>dispatch(incrementB(1))}>Counter B</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </>
  )
}

export default Counter
