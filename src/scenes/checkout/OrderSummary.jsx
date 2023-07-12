import React, { useState, useEffect } from "react";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";

import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  
} from "../../state";

import { useNavigate } from "react-router-dom";




const OrderSummary = () => {

    return (


    );
};

export default OrderSummary;