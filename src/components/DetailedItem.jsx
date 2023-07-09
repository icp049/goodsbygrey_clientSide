import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const DetailedItem = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const { category, price, name, detailedImage } = item.attributes;

  const handleAddToCart = () => {
    dispatch(addToCart({ item: { ...item, count } }));
  };

  return (
    <Box width={width}>
      {detailedImage && Array.isArray(detailedImage) && detailedImage.map((image, index) => {
        const {
          data: {
            attributes: {
              formats: {
                medium: { url },
              },
            },
          },
        } = image;

        return (
          <Box
            key={index}
            position="relative"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          >
            <img
              alt={item.name}
              width="300px"
              height="400px"
              src={`http://localhost:1337${url}`}
              onClick={() => navigate(`/item/${item.id}`)}
              style={{ cursor: "pointer" }}
            />
            <Box
              display={isHovered ? "block" : "none"}
              position="absolute"
              bottom="10%"
              left="0"
              width="100%"
              padding="0 5%"
            >
              <Box display="flex" justifyContent="space-between">
                <Box
                  display="flex"
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="3px"
                >
                  <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography color="blue">{count}</Typography>
                  <IconButton onClick={() => setCount(count + 1)}>
                    <AddIcon />
                  </IconButton>
                </Box>

                <Button
                  onClick={handleAddToCart}
                  sx={{ backgroundColor: "blue", color: "white" }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Box>
        );
      })}

      <Box mt="3px">
        <Typography variant="subtitle2" color="black">
          {category.replace(/([A-Z])/g, "$1").replace(/^./, (str) =>
            str.toUpperCase()
          )}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold"> ${price}</Typography>
      </Box>
    </Box>
  );
};

export default DetailedItem;
