import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";



import { useParams, Link } from "react-router-dom";
import Item from "../../components/Item";
import { addToCart } from "../../state";



const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  async function getItem() {
    const itemResponse = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      { method: "GET" }
    );
    const itemJson = await itemResponse.json();
    setItem(itemJson.data);
    setCurrentImageIndex(0); // Reset the image index to the first image
  }

  async function getItems() {
    const response = await fetch(
      `http://localhost:1337/api/items?populate=image`,
      { method: "GET" }
    );
    const itemsJson = await response.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); //eslint-disable-line react-hooks/exhaustive-deps

  
  

  const handleAddToCart = () => {
    const cartItem = {
      item: {
        ...item,
        count,
        image: item.attributes.image // Use the image from the Item component
      }
    };
    dispatch(addToCart(cartItem));
  };

  return (
    
    <Box width="80%" m="80px auto">
      <Box display="flex" justifyContent="space-between" mb = "20px">
  <Button
    component={Link}
    to="/"
    variant="contained"
    color="primary"
   
    startIcon={<ArrowBackIcon />}
    sx={{
      "&:hover": {
        backgroundColor: "darkblue",
      },
    }}
  >
    Go back to Home
  </Button>
</Box>



      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
          
        </Box>

        <Box flex="1 1 50%" mb="40px">
         

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography>${item?.attributes?.price}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.attributes?.longDescription}
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            minHeight="50px"
            sx={{ border: `1.5px solid black`, alignItems: "center" }}
          >
            <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
              <RemoveIcon />
            </IconButton>

            <Typography sx={{ p: "0 5px" }}>{count}</Typography>

            <IconButton onClick={() => setCount(count + 1)}>
              <AddIcon />
            </IconButton>

            <Button onClick={handleAddToCart} sx={{ backgroundColor: "blue", color: "white" }}>
          Add to Cart
        </Button>
          </Box>

          <Box>
            <Box m="20px 0 5px 0" display="flex">
             
            </Box>
           
          </Box>
        </Box>
      </Box>

      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>

      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item?.attributes?.longDescription}</div>
        )}
        
      </Box>

      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />

          ))}
          
        </Box>
      </Box>






    </Box>
  );
};

export default ItemDetails;
