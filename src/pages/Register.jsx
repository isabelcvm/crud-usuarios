import React from 'react'
import {Container,Grid } from '@mui/material';
import { FormRegister } from '../components/FormRegister';
import ImageLogin from '../assets/images/login.jpg'

const Register = () => {
  return (
    <Container sx={{ background: 'whitesmoke',
      width: '100%',
      height: '100vh',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
      
    }}  >
       <Grid
         lg={4} 
         maxWidth='30%'
         container
         direction="column"
         justifyContent="center"
          alignItems="center"
        >
         <img src={ImageLogin} alt="Login Imagen" width='100%' sx={{ borderRadius: '20px' }} /> 
        </Grid>
        <Grid
          lg={8} 
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
           <h2>¡Regístrate Ahora!</h2> 
          <FormRegister />

        </Grid>
    </Container>
  )
}

export default Register