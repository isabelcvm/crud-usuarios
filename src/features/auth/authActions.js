import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';
import configAxios from "../../config/configAxios";


export const useLogin = (  async (state, {payload} ) => {
    console.log(state)
    const {username, password} = payload
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
         const {data} = await configAxios.post( `/?username=${username}&password=${password}`, config  )
         console.log(data)
         if (data.token) {
            localStorage.setItem('token', data.token)
         }

      } catch (error) {
        console.log(error)
        // if (error.response && error.response.data.message) {
        //   //return rejectWithValue(error.response.data.message)
        //   return console.log(error.response.data.message)
        // }else {
        //   return rejectWithValue(error.message)
        // }
      }
    }
  )

export const userTest = (state, datos) => {
    return console.log('desde test', datos)
}