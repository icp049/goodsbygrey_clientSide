import { Box, Alert, AlertTitle, Typography } from '@mui/material';

const Confirmation = () => {
  return (
    <Box m="90px auto" width="80%" height="50vh" bgcolor="rgba(0, 128, 0, 0.1)" // Transparent green box background
    borderRadius="10px">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an order -{' '}
        <Typography component="strong">Congratulations on your purchase</Typography>
      </Alert>
    </Box>
  );
};

export default Confirmation;
