import axios from "axios"
import Constants from "../Constant/Constants";

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import EndUrls from "./EndUrls";
import { Header } from "react-native/Libraries/NewAppScreen";



export const loginApi = createAsyncThunk("loginApi", async (body) => {
    try {
        const res = await axios.post(Constants.BaseUrl + EndUrls.ep_login, body)
        return res
    } catch (error) {
        console.log("catch error ", error);
    }
});
export const registerApi = createAsyncThunk("registerApi", async (body) => {
    try {
        const res = await axios.post(Constants.BaseUrl + EndUrls.ep_register, body)
        return res
    } catch (error) {
        console.log("catch error ", error);
    }
});

const apiSlice = createSlice({
    name: "apiSlice",
    initialState: {
        isLoading: false,
        login: [],
        register: [],
        isError: false
    },
    reducers: {
        resetLogin: state => {
            state.login = {}
        },
        resetRegister: state => {
            state.login = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginApi.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(loginApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.login = action.payload;
        })
        builder.addCase(loginApi.rejected, (state, action) => {
            state.isError = true;
        })
        builder.addCase(registerApi.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(registerApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.login = action.payload;
        })
        builder.addCase(registerApi.rejected, (state, action) => {
            state.isError = true;
        })
    }
});

export const {
    resetLogin,
    resetRegister
} = apiSlice.actions

export const loginResData = state => state.userManger.login
export const registerResData = state => state.userManger.register

export default apiSlice.reducer;

