import { Box, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  // you can check more conditions here
  if (pathname === '/welcome') return null;

  return (
    <Box mt="30px" p="20px 0" backgroundColor="gray">
      <Box width="80%" margin="auto">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h4" fontWeight="bold" mb="20px" color="black">
                NYAHA
              </Typography>
              <div>
                Tokyo, Japan
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h4" fontWeight="bold" mb="20px">
                About Us
              </Typography>
              <Typography mb="10px"> Careers</Typography>
              <Typography mb="10px"> Careers</Typography>
              <Typography mb="10px"> Careers</Typography>
              <Typography mb="10px"> Careers</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h4" fontWeight="bold" mb="20px">
                Categories
              </Typography>
              <Typography mb="10px"> Shoes</Typography>
              <Typography mb="10px"> Apparel</Typography>
              <Typography mb="10px"> asadasd</Typography>
              <Typography mb="10px"> asdasdsd</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography variant="h4" fontWeight="bold" mb="20px">
                Contact Us
              </Typography>
              {/* Social Media Icons */}
              <Box display="flex" justifyContent="center">
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook-square" style={{ fontSize: '24px', margin: '10px' }} />
                </a>
                <a href="https://www.twitter.com">
                  <i className="fab fa-twitter-square" style={{ fontSize: '24px', margin: '10px' }} />
                </a>
                <a href="https://www.instagram.com">
                  <i className="fab fa-instagram-square" style={{ fontSize: '24px', margin: '10px' }} />
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
