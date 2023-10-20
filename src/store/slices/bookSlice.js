import { createSlice } from "@reduxjs/toolkit";
import { getBook } from "../actions";

const initialState = {
    books: []
};

const bookSlice = createSlice({
    name: "getbookSlise",
    initialState,
    reducers: {},
    extraReducers: {
        [getBook.fulfilled]: (state, action) => {
            state.books = action.payload
        }
    }
});

export default bookSlice.reducer;