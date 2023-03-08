import React from 'react'
import Grid from '@mui/material/Grid';
import { FormRegister } from '../components/FormRegister';
import ImageLogin from '../assets/images/login.jpg'

const Register = () => {
  return (
    <Grid container >

        <Grid md={5}>
            <div>
                <img src={ImageLogin} alt="Image Login" width='78%'/>
            </div>
        </Grid>
        <Grid  md={6} direction="column"  justifyContent="center"  alignItems="center"  >
            <h2>Registrate Ahora!</h2> 
            <FormRegister />
        </Grid>
    </Grid>
  )
}

export default Register