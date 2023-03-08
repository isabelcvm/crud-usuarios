import { createSlice } from "@reduxjs/toolkit";
import configAxios from "../../config/configAxios";
import {useLogin } from "./authActions";


// initialize userToken desde local storage
//const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null

//const initialState = {
   // userToken,
//}

export const authSlice =  createSlice({
    name: 'users',
    initialState: '',
    reducers:{
        authLogin: useLogin
    }
})
export const {authLogin} = authSlice.actions
export default authSlice.reducer