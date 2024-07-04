import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#283593', color: 'white', padding: '20px 0' }}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} sx={{textAlign:'left'}}>
            <Typography variant="h6">Contact Information</Typography>
            <Typography>Email: martinezemerson52@gmail.com</Typography>
            <Typography>Phone: (+63) 908 282 2932 </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{textAlign:'right'}}>
            <Typography variant="h6"  >Location</Typography>
            <Typography>Lucena City, Philippines</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ marginTop: '20px' }}>
          © {new Date().getFullYear()} Emerson L. Martinez. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
