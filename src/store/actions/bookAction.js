import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBook =
    createAsyncThunk(
        "getBook",
        async (arg) => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/api/v1/library/`);
                console.log(data);
                return data
            } catch (error) {
                console.error(error)
            }
        });