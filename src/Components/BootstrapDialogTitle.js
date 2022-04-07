import React from 'react';
import { DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';



const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ mr: 7, p: 2, pl:3, fontFamily:'Montserrat', textTransform: "uppercase", fontWeight:700 }} {...other}>
        {children}
        {
            onClose 
          ? 
          ( 
            <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 10,
              top: 10,
              color: (theme) => theme.palette.grey[500],
            }}
            >
              <CloseIcon />
            </IconButton>
          ) 
        : 
          null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
        
  export default BootstrapDialogTitle;