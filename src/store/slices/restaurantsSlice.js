import { createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "../actions";

const initialState = {
    restaurants: []
}

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {},
    extraReducers: {
        [getRestaurants.fulfilled]: (state, action) => {
            state.restaurants = action.payload;
        },
        [getRestaurants.rejected]: (state, action) => {
            console.log("error")
        },
        [getRestaurants.pending]: (state, action) => {
            console.log("loading...")
        }
    }
})