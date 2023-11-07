import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRecipes = createAsyncThunk(
    "getRecipes",
    async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/recipes`);
            console.log(data)
            return data;
        } catch (error) {
            console.error(error);
        }
    }
)
