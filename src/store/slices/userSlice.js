import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions";

 export const userSlice = createSlice({
  name: "postUser",
  initialState: {
    userInfo: null,
  },
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(login.fulfilled, (state, action) => {
      state.userInfo = action.payload
    })
    addCase(login.rejected, (state, action) => {
      state.error = action.payload
    })
  }
});

export default userSlice.reducer;
