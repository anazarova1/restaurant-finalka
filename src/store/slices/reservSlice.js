import { createSlice } from "@reduxjs/toolkit";
import { getReserv, postReserv } from "../actions";

const initialState = {
  reserv: []
}
export const reservSlice = createSlice({
  name: 'reservSlice',
  initialState: {},
  reducers: {},
  extraReducers: {
    [postReserv.fullfield]: (state) => {

    },
    [getReserv.fulfilled]: (state, action) => {
      state.reserv = action.payload;

    }, [getReserv.rejected]: (state, action) => {
      console.log("error")
    },
    [getReserv.pending]: (state, action) => {
      console.log("loading...")
    }
  }
});

