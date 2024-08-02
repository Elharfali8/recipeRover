import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false, 
    recipes: [],
    error: null
}

const apiKey = import.meta.env.VITE_API_KEY

export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async ({activeBtn, recipeNum}) => {
    try {
        let url;
        if (activeBtn === 'all') {
          url = `https://api.spoonacular.com/recipes/random?number=${recipeNum}&apiKey=${apiKey}`;
        } else {
          url = `https://api.spoonacular.com/recipes/complexSearch?query=${activeBtn}&number=${recipeNum}&apiKey=${apiKey}`;
        }
        const response = await axios.get(url);
        return activeBtn === 'all' ? response.data.recipes : response.data.results
        
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
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

export default recipesSlice.reducer