import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false, 
    data: [],
    error: null
};

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchByCategories = createAsyncThunk('categories/fetchByCategories', async ({ query }) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${apiKey}`);
        return response.data.results; // Adjust based on API response structure
    } catch (error) {
        throw error.message || 'Failed to fetch data';
    }
});

export const byCategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchByCategories.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchByCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchByCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
});

export default byCategoriesSlice.reducer;
