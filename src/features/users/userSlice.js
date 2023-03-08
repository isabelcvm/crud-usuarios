import { createSlice } from "@reduxjs/toolkit";
import { userTest } from "../auth/authActions";
import { addUser } from "./userActions";

const initialState={
    token: null,

}

export const userSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers:{
        createUser: addUser,
        test: userTest
    }
})

export const { createUser, test } = userSlice.actions
export default userSlice.reducer