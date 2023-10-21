import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const postUser =
    createAsyncThunk(
        "postUser",
        async (newUser) => {
            try {
                const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}api/v1/auth/users/`, newUser)
                // localStorage.setItem("token", data.token);
                return data;
            }
            catch (error) {
                console.error(error);
                return error
            }
        }
    );

export const login =
    createAsyncThunk(
        "login",
        async (user) => {
            try {
                const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}auth/token/login/`, user)
                localStorage.setItem("token", data.auth_token);
                return data;
            }
            catch (error) {
                console.error(error);
                return error
            }
        }
    );

