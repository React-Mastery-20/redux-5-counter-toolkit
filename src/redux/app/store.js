// import { createStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store;