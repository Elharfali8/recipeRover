import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "./features/featured/popularSlice";
import categoriesReducer from "./features/category/categoriesSlice";
import recipesReducer from "./features/recipes/recipesSlice";


export const store = configureStore({
    reducer: {
        popular: popularReducer,
        categories: categoriesReducer,
        recipes: recipesReducer
    }
})