import React from 'react'
import {ListItem, List, ListItemIcon, ListItemText, Box, ListItemButton, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const Sidebar = () => {
  return (
    <Box
      sx={{ width: '13%', bgcolor:'whitesmoke' }}

    >
      <List>
          <Typography variant="h5" >
            Bienvenido
          </Typography>
          <Typography variant="h7" component="p" >
            Isabel
          </Typography>
      </List>
    </Box>
  )
}

export default Sidebar