import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';
import configAxios from "../../config/configAxios";


export const useLogin = async (state, {payload}) => {
    console.log(state)
    const {username, password} = payload
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
         const {data} = await configAxios.post( `/?username=${username}&password=${password}`, config  )
         if (data.token) {
            localStorage.setItem('token', data.token)
         }
      } catch (error) {
        console.log(error)
      }
    }

export const userTest = (state, datos) => {
    return console.log('desde test', datos)
}