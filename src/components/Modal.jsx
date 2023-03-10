import React from 'react'
import {  Dialog, DialogTitle, DialogContent, DialogContentText, Button, DialogActions   } from '@mui/material'
import ModalContent from './ModalContent';

const Modal = ({open, close}) => {

    const handleClose = () => {
        close(false);
    };

  return (
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Agregar Usuario 
        </DialogTitle>
        <DialogContent>
          <ModalContent />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}  autoFocus>Cerrar</Button>
        </DialogActions>
      </Dialog>
  )
}

export default Modal