import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import React from 'react'

function Alert (props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default ({ open, handleClose, message }) => (
    <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
    >
        <Alert onClose={handleClose} severity='success'>
            {message}
        </Alert>
    </Snackbar>
)
