import { createSlice } from "@reduxjs/toolkit";
import configAxios from "../../config/configAxios";
import {useLogin } from "./authActions";

// const initialState = {
//     error: null
//   }

export const authSlice =  createSlice({
    name: 'auth',
    initialState: '',
    reducers:{
        authLogin: useLogin
    },
    // extraReducers: {
    //     [useLogin.rejected]: (state, { payload }) => {
    //         state.error = payload
    //     }
    // }
})
export const {authLogin} = authSlice.actions
export default authSlice.reducer