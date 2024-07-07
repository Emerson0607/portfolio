import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={{ backgroundColor: '#283593', color: 'white', padding: isMobile ? '8px' : '20px 0' }}>
      <Container>
        <Grid container gap={isMobile ? 2 : 0}>
          <Grid item xs={12} md={6} sx={{textAlign:'left'}}>
            <Typography variant="h6" sx={{fontSize:isMobile ? '16px' :'20px'}}>Contact Information</Typography>
            <Typography sx={{fontSize:isMobile ? '12px' :'16px'}}>Email: martinezemerson52@gmail.com</Typography>
            <Typography sx={{fontSize:isMobile ? '12px' :'16px'}}>Phone: (+63) 908 282 2932 </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{textAlign:isMobile ? 'left' :'right'}}>
            <Typography variant="h6"  sx={{fontSize:isMobile ? '16px' :'20px'}}>Location</Typography>
            <Typography sx={{fontSize:isMobile ? '12px' :'16px'}}>Lucena City, Philippines</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ marginTop: '20px', fontSize:isMobile ? '12px' :'16px' }}>
          © {new Date().getFullYear()} Emerson L. Martinez. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
