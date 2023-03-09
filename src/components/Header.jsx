import React from 'react'
import {Button, Box, Typography, AppBar, Toolbar, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <Box component="nav" >
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UserCRUD
          </Typography>
          <Button color="inherit">Cerrar Sesión</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header