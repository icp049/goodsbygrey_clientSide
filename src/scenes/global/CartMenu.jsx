import {Box, Button, Divider, IconButton, Typography} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";

import {
decreaseCount,
increaseCount,
removeFromCart,
setIsCartOpen,
} from "../../state";

import {useNavigate} from "react-router-dom";


const FlexBox = styled(Box)`
 display: flex;
 justify-content: spacebetween;
 align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <Box
    display = {isCartOpen ? "block" : "none"}
    backgroundColor = "black"
    position = "fixed"
    zIndex = {10}
    width = "100%"
    height = "100%"
    left = "0"
    top = "0"
    overflow = "auto"
    >    

        
        <Box
        position = "fixed"
        right = "0"
        bottom = "0"
        width = "max(400px, 30%)"
        height = "100%"
        backgroundColor = "white"
        >

        <Box padding = "30px" overflow = "auto" height = "100%"
        >{}
         <FlexBox mb = "15px">
            <Typography variat = "h3"> SHOPPING BAG ({cart.length})</Typography>
            <IconButton onClick = {() => dispatch(setIsCartOpen({}))}>
                <CloseIcon/>
            </IconButton>
         </FlexBox>

          {}
         <Box>
            {cart.map((item) => (
                <Box key = {`${item.attributes.name} - ${item.id}`}>
                     <FlexBox p = "15px 0">
                        
                        <Box flex="1 1 40%">
  <img
    alt={item?.name}
    width="123px"
    height="154px"
    src={`http://localhost:1337${item?.attributes.image?.data?.attributes?.formats?.medium?.url}`}
  />
</Box>
                     <Box flex = "1 1 60%">
                        <FlexBox mb = "5px">
                           <Typography fontWeight = "bold">
                            {item.attributes.name}
                           </Typography>
                           <IconButton onClick  ={()=> dispatch(removeFromCart({id: item}))}>
                            <CloseIcon/>

                            </IconButton>
   
                        </FlexBox>
                          <Typography> {item.attributes.shortDescription}</Typography>
                          <FlexBox m = "15px 0">
                            <Box
                            mt  ="5px"
                            display = "flex"
                            alingnItems = "center"
                            border = {`1.5px solid blue`}
                            >
                                 <IconButton
                                    onClick = {() => dispatch(decreaseCount({id: item.id}))}
                                    >
                                        <RemoveIcon />
                                 </IconButton>

                                 <Typography mt = "8px">{item.count}</Typography>


                                 <IconButton
                                    onClick = {() => dispatch(increaseCount({id: item.id}))}
                                    >
                                        <AddIcon />
                                 </IconButton>

                                 

                            </Box>

                           

                          </FlexBox>

                          
                     </Box>
                        
                        </FlexBox>   
                        <Divider />                      
                </Box>
            ))}
         </Box>
              
             {/*actions*/}

             <Box m = "20px 0">
                <FlexBox m = "20px 0">
                    <Typography fontWeight = "bold"> SUBTOTAL:</Typography>
                    <Typography fontWeight = "bold" ml = "5px">  ${totalPrice}</Typography>
                </FlexBox>
                <Button sx = {{ backgroundColor: "blue", color: "white", borderRadius: 0, minWidth: "100%", 
            padding: "20px 40px", m:"20px 0"}}
            onClick = {() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
            } }
            >
                    CHECKOUT
                </Button>
             </Box>






        </Box>

                  



        </Box>

    </Box>
  )
}

export default CartMenu;