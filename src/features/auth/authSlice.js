import { createSlice } from "@reduxjs/toolkit";
import configAxios from "../../config/configAxios";
import {useLogin } from "./authActions";

export const authSlice =  createSlice({
    name: 'users',
    initialState: '',
    reducers:{
        authLogin: useLogin
    }
})
export const {authLogin} = authSlice.actions
export default authSlice.reducer