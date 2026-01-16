import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice();

let initialState = {
    counterA: {
        a: 100
    },
    counterB: {
        b: 200
    }
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers:{
        incrementA: (state, action)=>{
            state.counterA.a = state.counterA.a + action.payload;
        },
        incrementB: (state, action)=>{
            state.counterB.b = state.counterB.b + action.payload;
        },
        reset: (state)=>{
            return initialState
        }
    }
})

console.log(counterSlice);

export let {incrementA, incrementB, reset} = counterSlice.actions;

let counterReducer = counterSlice.reducer;

export default counterReducer;