import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";

const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
  const cart = useSelector((state) => state.cart.cart); // Assuming you have access to the cart state using useSelector
  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4" }}
        />
      </Box>

      {/* ORDER SUMMARY */}
      <Box mt="30px">
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Order Summary
        </Typography>
        <OrderSummary cart={cart} totalPrice={totalPrice} />
      </Box>
    </Box>
  );
};

export default Payment;
