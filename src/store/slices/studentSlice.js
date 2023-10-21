
import { createSlice } from "@reduxjs/toolkit";
export default coursesSlice.reducer;

 export const addStudent = createSlice({
  name: "addStudent",
  initialState,
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(addStudent.fulfilled, (state, action) => {
      state.courses = action.payload
    })
    addCase(addStudent.rejected, (state, action) => {
      state.error = action.payload
    })
  }
});
