import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const OrderSummary = ({ cart, totalPrice }) => {
  // Calculate tax
  const tax = totalPrice * 0.09; //edit with the tax of your area
  // Calculate total price including tax
  const totalPriceWithTax = totalPrice + tax;

  return (
    <Box>
      <Typography variant="h5">Order Summary</Typography>

      {cart.map((item) => (
        <Box key={`${item.attributes.name} - ${item.id}`}>
          <Box display="flex" justifyContent="space-between" alignItems="center" p="15px 0">
            <Typography>{item.attributes.name}</Typography>
            <Typography>X {item.count}</Typography>
            <Typography>$ {item.attributes.price} </Typography>
          </Box>
          <Divider />
        </Box>
      ))}

      <Box m="20px 0" display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold">Subtotal:</Typography>
        <Typography fontWeight="bold" ml="5px">${totalPrice}</Typography>
      </Box>

      <Box m="20px 0" display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold">Tax(6%):</Typography>
        <Typography fontWeight="bold" ml="5px">${tax}</Typography>
      </Box>

      <Box m="20px 0" display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold">Total:</Typography>
        <Typography fontWeight="bold" ml="5px">${totalPriceWithTax}</Typography>
      </Box>
    </Box>
  );
};

export default OrderSummary;
