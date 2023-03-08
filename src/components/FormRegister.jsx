import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { Button, TextField, Box } from '@mui/material';

import Alerta from './Alert';
import { createUser } from '../features/users/userSlice';

export const FormRegister = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [repetPassword, setRepetPassword] = useState();
  const dispatch = useDispatch();

  const onSubmitData = data => {
    //Psar los datos al store
    dispatch(createUser(data))

  }

  return (

    <form onSubmit={handleSubmit(onSubmitData)}>
      <Box sx={{
        '& .MuiTextField-root': { width: '50ch' },
      }}
        autoComplete="off"
      >
        <TextField

          label="Nombre"
          sx={{
            marginBottom: '20px',
            mr: 8
          }}
          {...register('firstName', {
            required: {
              value: true,
              message: "El nombre es requerido"
            }
          })}
        />
        {errors.firstName && <Alerta alerta={errors.firstName} />}
        <TextField

          label="Apellido"
          sx={{
            marginBottom: '20px'
          }}
          {...register('lastName', {
            required: {
              value: true,
              message: "El apellido es requerido"
            }
          })}
        />
        {errors.lastName && <Alerta alerta={errors.lastName} />}
      </Box>
      <Box
        sx={{
          '& .MuiTextField-root': { width: '50ch' },
        }}
        autoComplete="off"
      >
        <TextField

          label="Correo Electrónico"
          sx={{
            marginBottom: '20px',
            mr: 8
          }}
          {...register('email', {
            required: {
              value: true,
              message: "El correo electrónico es requerido"
            }
          })}
        />
        {errors.email &&
           <Box
           sx={{
             display: 'inline',
             '& > :not(style)': {
               m: 1,
               width: '30%',
             },
           }}
         >
             <Alerta alerta={errors.email} /> 
            </Box>
        }
        <TextField

          label="Teléfono"
          sx={{
            marginBottom: '20px'
          }}
          {...register('telefono', {
            required: {
              value: true,
              message: "El teléfono es requerido"
            }
          })}
        />
        {errors.telefono && 
          <Box
          sx={{
            display: 'inline',
            '& > :not(style)': {
              m: 1,
              width: '30%',
            },
          }}
        >
            <Alerta alerta={errors.email} />
           </Box>
        }

      </Box>

      <div>
        <TextField fullWidth
          multiline
          rows={3}
          label="Dirección"
          sx={{
            marginBottom: '20px'
          }}
          {...register('direccion', {
            required: {
              value: true,
              message: "La dirección es requerida"
            }
          })}
        />
        {errors.direccion && 
        <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 1,
            width: '30%',
          },
        }}
      >
          <Alerta alerta={errors.direccion} />
         </Box>
        }
      </div>
      <Box autoComplete="off" sx={{
        '& .MuiTextField-root': { width: '50ch' },
      }}
      >
        <TextField

          label="Paswword"
          sx={{
            marginBottom: '20px',
            mr: 8
          }}
          {...register('password', {
            required: {
              value: true,
              message: "La Contraseña es requerida"
            },
            minLength: {
              value: 5,
              message: "La contraseña debe ser mas larga"

            }
          })}
        />

         {errors.password && 
         <Box
         sx={{
           display: 'flex',
           '& > :not(style)': {
             m: 1,
             width: '30%',
           },
         }}
       >
            <Alerta alerta={errors.password} />
          </Box>
        }
        
        <TextField

          label="Repetir Password"
          sx={{
            marginBottom: '20px'
          }}
          value={repetPassword}
          onChange={(e) => setRepetPassword(e.target.value)}
        />
      </Box>
      <Button sx={{ padding: '10px', }} fullWidth variant="contained" type="submit">Registrar</Button>
    </form>

  )
}
