import {Box, Typography} from '@mui/material';
import { useLocation } from "react-router-dom";







const Footer = () => {

    const { pathname } = useLocation();
    console.log(pathname);
  // you can check a more conditions here
   if (pathname === "/welcome") return null;

    return(
        <Box
        mt = "70px" p="40px 0" backgroundColor = "gray"
        >
            <Box
            width = "80%"
            margin = "auto"
            display = "flex"
            justifyContent = "space-between"
            flexWrap = "wrap"
            rowGap = "30px"
            columnGap = "clamp(20px,30px,40px)">

                <Box
                width = "clamp(20%, 30%,40%)">
                    <Typography varaint = "h4" fontWright = "bold" mb = "30px" color="black">
                         NYAHA
                    </Typography> 
                    <div>
                        Tokyo, Japan
                    </div>

                </Box>

                <Box>
                    <Typography variant = "h4" fontWeight = "bold" mb = "30px">
                        About Us
                    </Typography>
                    <Typography mb = "30px"> Careers</Typography>
                    <Typography mb = "30px"> Careers</Typography>
                    <Typography mb = "30px"> Careers</Typography>
                    <Typography mb = "30px"> Careers</Typography>
                </Box>


                <Box>
                    <Typography variant = "h4" fontWeight = "bold" mb = "30px">
                        Categories
                    </Typography>
                    <Typography mb = "30px"> Shoes</Typography>
                    <Typography mb = "30px"> Apparel</Typography>
                    <Typography mb = "30px"> asadasd</Typography>
                    <Typography mb = "30px"> asdasdsd</Typography>
                </Box>


                <Box width = "clamp(20%, 25%,30%)" >
                    <Typography variant = "h4" fontWeight = "bold" mb = "30px">
                        Categories
                    </Typography>
                    <Typography mb = "30px"> Shoes</Typography>
                    <Typography mb = "30px"> Apparel</Typography>
                    <Typography mb = "30px"> asadasd</Typography>
                    <Typography mb = "30px"> asdasdsd</Typography>
                </Box>
                

            </Box>

        </Box>
    )

}

export default Footer;