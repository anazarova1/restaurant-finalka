import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./slices/coursesSlice";
import bookSlice from "./slices/bookSlice";

export const courses = configureStore({
    reducer: {
        products: coursesSlice,
        book: bookSlice
    }
})