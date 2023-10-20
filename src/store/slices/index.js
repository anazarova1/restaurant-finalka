import { configureStore } from "@reduxjs/toolkit";
import coursesSlice from "./coursesSlice";
import bookSlice from "./bookSlice";

export const store = configureStore({
    reducer: {
        products: coursesSlice,
        books: bookSlice
    }
})

