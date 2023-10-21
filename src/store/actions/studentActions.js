import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const addStudens=
  createAsyncThunk(
    "addStudents",
    async (student) => {
      try {
        const response = await axios.patch(`${process.env.REACT_APP_MAIN_URL}api/v1/auth/users/${student.id}`, student, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
      }
      catch (error) {
        console.error(error);
      }
    }
  );
