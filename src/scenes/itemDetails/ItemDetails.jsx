import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button, Tabs, Tab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useParams, Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Item from "../../components/Item";
import { addToCart } from "../../state";
import DetailedItem from "../../components/DetailedItem";

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
      `http://localhost:1337/api/items/${itemId}?populate=detailedImage`,
      { method: "GET" }
    );
    const itemJson = await itemResponse.json();
    setItem(itemJson.data);
    setCurrentImageIndex(0); // Reset the image index to the first image
  }

  async function getItems() {
    const response = await fetch(
      "http://localhost:1337/api/items?populate=detailedImage",
      { method: "GET" }
    );
    const itemsJson = await response.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); //eslint-disable-line react-hooks/exhaustive-deps

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  const goToPrevItem = () => {
    const currentIndex = items.findIndex((i) => i.id === itemId);
    const prevItemIndex = currentIndex - 1;
    if (prevItemIndex >= 0) {
      const prevItemId = items[prevItemIndex].id;
      window.location.href = `/item/${prevItemId}`;
    }
  };

  const goToNextItem = () => {
    const currentIndex = items.findIndex((i) => i.id === itemId);
    const nextItemIndex = currentIndex + 1;
    if (nextItemIndex < items.length) {
      const nextItemId = items[nextItemIndex].id;
      window.location.href = `/item/${nextItemId}`;
    }
  };

  return (
    <Box width="80%" m="80px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`http://localhost:1337${item?.detailedImage?.[currentImageIndex]?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
          {items.length > 1 && (
            <Box display="flex" justifyContent="center" mt="10px">
              <IconButton onClick={goToPrevImage}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton onClick={goToNextImage}>
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          )}
        </Box>

        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between">
            <Box component={Link} to="/">Home</Box>
            <Box>
              <IconButton onClick={goToPrevItem} disabled={itemId === items[0]?.id}>
                Prev
              </IconButton>
              <IconButton onClick={goToNextItem} disabled={itemId === items[items.length - 1]?.id}>
                Next
              </IconButton>
            </Box>
          </Box>

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

            <Button
                onClick = {()=> {dispatch(addToCart({item: {...item, count}}));
                }}
                sx = {{backgroundColor: "blue", color: "white"}}>
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
        {value === "reviews" && <div>reviews</div>}
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
            <DetailedItem key={`${item.name}-${i}`} item={item} />

          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
