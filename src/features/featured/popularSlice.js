import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false, 
    popular: [],
    error: null
}

const apiKey = import.meta.env.VITE_API_KEY

export const fetchPopular = createAsyncThunk('featured/fetchPopular', async () => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=20&apiKey=${apiKey}`)
        const data = response.data.results
        return data
    } catch (error) {
        throw error.message || 'Failed to fetch data'
    }
})

export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopular.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPopular.fulfilled, (state, action) => {
                state.isLoading = false;
                state.popular = action.payload;
                state.error = null;
            })
            .addCase(fetchPopular.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
})

export default popularSlice.reducer