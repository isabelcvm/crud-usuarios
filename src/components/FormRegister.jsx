import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { Button, TextField, Box, Grid } from '@mui/material';

import Alerta from './Alert';
import { createUser } from '../features/users/userSlice';
import { addUser } from '../features/users/userActions';

export const FormRegister = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [repetPassword, setRepetPassword] = useState();
  const [alerta, setAlerta] = useState({});
  const dispatch = useDispatch();

  const onSubmitData = data => {
    //Psar los datos al store

    if (data.password === repetPassword) {
      addUser(data)
    } else {
      setAlerta({
        msg: 'Las contreseñas no coindicen, vuelva a intentar'
      })
    }
  }

  return (
    <>

      {/* <Grid
        container
        spacing={5}
      >
        {
          [...Array(12)].map(item => 
            <Grid
              item
              xs={2}
              sx={{
                border: 'solid black 1px'
              }}

            >
              Ailan
            </Grid>
          )
        }
      </Grid> */}
      <Grid container spacing={1} px={10} >
        <Grid item xs={6} mb={2}>
          <TextField required fullWidth
            label="Nombre"
            {...register("firstName", { required: true })}
          />
        </Grid>
        <Grid item xs={6} mb={2}>
          <TextField required fullWidth
            label="Apellido"
            {...register("lastName", { required: true })}
          />
        </Grid>
        <Grid item xs={6} mb={2}>
          <TextField fullWidth
            label="Correo"
            type="email"
            {...register("email", { required: true })}
          />
        </Grid>
        <Grid item xs={6} mb={2}>
          <TextField required fullWidth
            label="Nombre de Usuarios"
            {...register("username", { required: true })}
          />
        </Grid>
        <Grid item xs={12} mb={2} >
          <TextField fullWidth
            required
            label="Teléfono"
            {...register("telefono", { required: true })}
          />
        </Grid>
        <Grid item xs={12} mb={2}>
          <TextField 
            required
            label="Dirección"
            multiline
            rows={2}
            fullWidth
            {...register("direccion", { required: true })}
          />
        </Grid>
        <Grid item xs={6} mb={2} >
          <TextField fullWidth
            required
            type='password'
            label="Contraseña"
            {...register("password", { required: true })}
          />
        </Grid>
        <Grid item xs={6} mb={2} >
          <TextField fullWidth
            required
            type='password'
            label="Repetir Contraseña"
            value={repetPassword}
            onChange={(e) => setRepetPassword(e.target.value)}

          />
        </Grid>
        <Button  fullWidth variant="contained" type="submit">Registrar</Button>
      </Grid>

    </>

  )
}
