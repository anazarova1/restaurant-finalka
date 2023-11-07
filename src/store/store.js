import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/userSlice";
import { recipesSlice } from "./slices/recipesSlice";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        recipes: recipesSlice.reducer
    }
})