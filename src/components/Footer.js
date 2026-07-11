import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { colors, fonts } from '../theme/tokens';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box sx={{ backgroundColor: colors.ink, color: '#fff', py: isMobile ? '32px' : '48px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 3 : 0}>
          <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
            <Typography sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: isMobile ? '16px' : '18px' }}>
              Contact
            </Typography>
            <Typography sx={{ fontFamily: fonts.body, fontSize: isMobile ? '13px' : '15px', color: '#A6ADBB', mt: 1 }}>
              martinezemerson52@gmail.com
            </Typography>
            <Typography sx={{ fontFamily: fonts.body, fontSize: isMobile ? '13px' : '15px', color: '#A6ADBB' }}>
              (+63) 908 282 2932
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: isMobile ? 'left' : 'right' }}>
            <Typography sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: isMobile ? '16px' : '18px' }}>
              Location
            </Typography>
            <Typography sx={{ fontFamily: fonts.body, fontSize: isMobile ? '13px' : '15px', color: '#A6ADBB', mt: 1 }}>
              Lucena City, Philippines
            </Typography>
          </Grid>
        </Grid>

        <Typography
          sx={{
            fontFamily: fonts.mono,
            fontSize: '12px',
            color: '#6B7280',
            textAlign: 'center',
            mt: isMobile ? 4 : 5,
          }}
        >
          © {new Date().getFullYear()} Emerson L. Martinez. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;