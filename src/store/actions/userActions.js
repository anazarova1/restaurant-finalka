import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
    "registerUser",
    async (newUser) => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}/register`, newUser);
            localStorage.setItem("id", data.user.email)
            localStorage.setItem("token", data.accessToken);
            toast.success("Вы успешно зарегистрировались!");
            return data.user;
        } catch (error) {
            toast.error(error.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    "loginUser",
    async (newUser) => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}/login`, newUser);
            localStorage.setItem("id", data.user.email)
            localStorage.setItem("token", data.accessToken);
            toast.success("Вы успешно авторизовались!");
            return data.user;
        } catch (error) {
            toast.error(error.response.data);
        }
    }
);

export const getUserInfo = createAsyncThunk(
    "getUserInfo",
    async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/users/me`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            return data;
        } catch (error) {
            toast.error(error.response.data);
        }
    }
);