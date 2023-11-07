import { createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "../actions";

const initialState = {
    repices: {}
}

export const recipesSlice = createSlice({
    name: "recipesSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getRecipes.fulfilled]: (state, action) => {
            state.repices = action.payload;
        },
        [getRecipes.rejected]: (state, action) => {
            console.log("error")
        },
        [getRecipes.pending]: (state, action) => {
            console.log("loading...")
        }
    }
})