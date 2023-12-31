import {useDispatch, useSelector} from 'react-redux';
import {Badge, Box, IconButton} from '@mui/material';
import {
   
    ShoppingBagOutlined,
   
    SearchOutlined,
   
 } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';

import { setIsCartOpen } from '../../state';




const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)



    return ( 
    <Box //outer box
    display = "flex"
    alignItems="center"
     width="100%"
    height = "60px"
    backgroundColor = "grey"
    color = "black"
   position = "fixed"
    top = "0"
    left = "0"
 zIndex = "2"
    >

        <Box // inner box
           width = "80%"
           margin = "auto"
           display = "flex"
           justifyContent="space-between"
           alignItems= "center"
       >
          <Box
            onClick ={() => navigate("/")}
            sx = {{ '5:hover' : {cursor: "pointer"}}} 
            color = "blue"
         >
            GoodsByGrey
          </Box>


          <Box
          display = "flex"
          justifyContent= "space-between"
          columnGap = "20px"
          z-index = "2"
          >

            
          <Link to="welcome">Home</Link>
          <Link to="/about">About</Link>
          <Link to = "/" >Goods</Link>
            
           <IconButton sx = {{color: "black"}}>
            <SearchOutlined />
           </IconButton>

         

           <Badge

           badgeContent = {cart.length}
           color = "secondary"
           invisible = {cart.length === 0}
           sx = {{
            "& .MuiBadge-badge": {
                right:5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                mindWidth: "13px",
            },
           }}
           >
           <IconButton sx = {{color: "black"}}
           onClick = {() => dispatch(setIsCartOpen({}))}>
            <ShoppingBagOutlined />
           </IconButton>
        </Badge>
           
            
          </Box>

        </Box>


    </Box>
    );
};

export default Navbar;