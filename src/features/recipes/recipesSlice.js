import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false, 
    recipes: [],
    error: null
}

const apiKey = import.meta.env.VITE_API_KEY

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async ({ activeBtn, recipeNum, mainQuery }) => {
    try {
        let url;
        if (activeBtn === 'all') {
            if (mainQuery) {
                url = `https://api.spoonacular.com/recipes/complexSearch?query=${mainQuery}&number=${recipeNum}&apiKey=${apiKey}`;
            } else {
                url = `https://api.spoonacular.com/recipes/random?number=${recipeNum}&apiKey=${apiKey}`;
            }
        } else {
            url = `https://api.spoonacular.com/recipes/complexSearch?query=${mainQuery}&number=${recipeNum}&apiKey=${apiKey}&diet=${activeBtn}`;
        }
        const response = await axios.get(url);
        return activeBtn === 'all' && !mainQuery ? response.data.recipes : response.data.results;
    } catch (error) {
        console.error('Failed to fetch recipes:', error);
        throw error.message || 'Failed to fetch data';
    }
})

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.recipes = action.payload;
                state.error = null;
            })
            .addCase(fetchRecipes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
})

export default recipesSlice.reducer;
