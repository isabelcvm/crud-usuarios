import React, { useState } from 'react'
import { Box, SpeedDial  } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const AddSpeedDial = () => {

  return (
    <>
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1}}>
    <Link to='crear-usuario'>
        <SpeedDial
          ariaLabel="Example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<AddIcon />}
          >
        </SpeedDial>
      </Link>
    </Box>
    </>
  )
}

export default AddSpeedDial