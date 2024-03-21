import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Addslice";

const addstore = configureStore({
    reducer:{
        AddReducer : TodoSlice,
    }
})

export default addstore