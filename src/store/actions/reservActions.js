import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postReserv =
    createAsyncThunk(
        "postReserv",
        async (reserv,{dispatch}) => {
            try {
                console.log(reserv);
                const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}/reserv`, reserv)
                return data;
            }
            catch (error) {
                console.error(error);
                return error
            }
        })

        
export const getReserv = createAsyncThunk(
    "getReserv",
    async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/reserv`);
            console.log(data)
            return data;
        } catch (error) {
            console.error(error);
        }
    }
)

