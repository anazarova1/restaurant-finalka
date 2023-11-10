import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/userSlice";
import { recipesSlice } from "./slices/recipesSlice";
import { reservSlice } from "./slices/reservSlice";
import { restaurantsSlice } from "./slices/restaurantsSlice";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        recipes: recipesSlice.reducer,
        reserv: reservSlice.reducer,
        restaurants: restaurantsSlice.reducer,
    }
})