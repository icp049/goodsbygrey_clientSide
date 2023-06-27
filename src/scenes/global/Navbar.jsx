import {useDispatch, useSelector} from 'react-redux';
import {Badge, Box, IconButton} from '@mui/material';
import {
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined,
   
 } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

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
i   ndex = "1"
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
            ECCOMMER
          </Box>


          <Box
          display = "flex"
          justifyContent= "space-between"
          columnGap = "20px"
          z-index = "2"
          >
           <IconButton sx = {{color: "black"}}>
            <SearchOutlined />
           </IconButton>

           <IconButton sx = {{color: "black"}}>
            <PersonOutline />
           </IconButton>

           
           <IconButton sx = {{color: "black"}}
           onClick = {() => dispatch(setIsCartOpen({}))}>
            <ShoppingBagOutlined />
           </IconButton>

           <IconButton sx = {{color: "black"}}>
            <MenuOutlined />
           </IconButton>
            
          </Box>

        </Box>


    </Box>
    );
};

export default Navbar;