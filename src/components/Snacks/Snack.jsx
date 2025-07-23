import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Snack = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [open, setOpen]);

  return (
    <div>
      <Snackbar 
        open={open} 
        autoHideDuration={null} 
        onClose={handleClose} 
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Positioning to top-right corner
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Rahmat siz bilan tez orada aloqa chiqamiz!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Snack;
