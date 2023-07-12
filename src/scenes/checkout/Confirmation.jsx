import { Box, Alert, AlertTitle, Typography } from '@mui/material';

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an order -{' '}
        <Typography component="strong">Congratulations on your purchase</Typography>
      </Alert>
    </Box>
  );
};

export default Confirmation;
