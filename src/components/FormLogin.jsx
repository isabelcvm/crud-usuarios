import {  Button, TextField } from '@mui/material';
import { spacing } from '@mui/system';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import Alerta from './Alert';


export const FormLogin = () => {

    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmitData = data => {
        console.log(data)

        //Ya tenemos los datos
        
    }

  return (
    <form onSubmit={ handleSubmit(onSubmitData) }> 
        <div  >
            <TextField fullWidth
              label="Nombre de usuario"
              sx={{
                marginBottom: '15px'
              }}
              {...register('username', {
                required: {
                  value: true,
                  message: "El usuario es requerido"
                }
                } )}
              /> 
              {errors.username && <Alerta alerta={errors.username} /> }
        </div>
        <div>
            <TextField fullWidth
               
              label="Password"
              type="password"
              sx={{
                marginBottom: '20px'
              }}
              {...register('password', {
                required: {
                  value: true,
                  message: "La Contrasena es requerida"
                },
                minLength: {
                  value: 5, 
                  message: "La contraseña debe ser mas larga"
                  
                }
              })}
            />
            {errors.password && <Alerta alerta={errors.password} /> }
        </div>
        <Button sx={{ padding: '10px', }} fullWidth variant="contained" type="submit">Iniciar Sesion</Button>
    </form>
  )
}
