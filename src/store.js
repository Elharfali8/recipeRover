import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "./features/featured/popularSlice";
import categoriesReducer from "./features/category/categoriesSlice";


export const store = configureStore({
    reducer: {
        popular: popularReducer,
        categories: categoriesReducer
    }
})