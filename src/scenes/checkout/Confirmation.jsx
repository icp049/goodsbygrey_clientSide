// Confirmation.js
import React, { useEffect, useState } from 'react';
import { Box, Alert, AlertTitle, Typography } from '@mui/material';

const Confirmation = ({ orderId }) => {
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    // Fetch the order details from the server using the orderId prop
    fetch(`/api/orders/${orderId}`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the server response contains the order number as "id"
        setOrderNumber(data.id.toString());
      })
      .catch((error) => {
        console.error('Error fetching order number:', error);
      });
  }, [orderId]);

  return (
    <Box m="90px auto" width="80%" height="50vh">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an order -{' '}
        <Typography component="strong">Congratulations on your purchase</Typography>
        <Typography>Order Number: {orderNumber}</Typography>
      </Alert>
    </Box>
  );
};

export default Confirmation;
