import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./slices/coursesSlice";

export const courses = configureStore({
    reducer: {
        products: coursesSlice
    }
})