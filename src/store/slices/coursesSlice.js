import { createSlice } from "@reduxjs/toolkit";
import { getCourses, } from "../actions";

const initialState = {
  courses: [],
  error: null,
};

const coursesSlice = createSlice({
  name: "getCoursesSlise",
  initialState,
  reducers: {},
  extraReducers: ({addCase}) => {
    addCase(getCourses.fulfilled, (state, action) => {
      state.courses = action.payload
    })
    addCase(getCourses.rejected, (state, action) => {
      state.error = action.payload
    })
  }
});

export default coursesSlice.reducer;
