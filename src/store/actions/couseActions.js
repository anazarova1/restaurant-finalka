import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCourses =
  createAsyncThunk(
    "getCourses", 
    async (_, {rejectWithValue, dispatch}) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/courses/`
      );

      if(res.status !== 200) {
        throw new Error('Server error')
      }

      // console.log(res);
      return res.data

    } catch (error) {
      return rejectWithValue(error.message)
    }
  });