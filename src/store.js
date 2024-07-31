import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "./features/featured/popularSlice";


export const store = configureStore({
    reducer: {
        popular: popularReducer
    }
})