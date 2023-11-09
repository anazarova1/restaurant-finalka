import { createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "../actions";

const initialState = {
    recipes: []
}

export const recipesSlice = createSlice({
    name: "recipesSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getRecipes.fulfilled]: (state, action) => {

            state.recipes = action.payload;
        },
        [getRecipes.rejected]: (state, action) => {
            console.log("error")
        },
        [getRecipes.pending]: (state, action) => {
            console.log("loading...")
        }
    }
})