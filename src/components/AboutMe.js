import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../CSS/AboutMe.css';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center'
}));

const textStyles = {
  color:'rgb(28, 45, 85)',
  fontFamily: 'Roboto, sans-serif',
};



const AboutMe = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div style={{width:'100vw', height:'100vh', backgroundColor:'#FDFDFD'}}>
      <div className='aboutMe_title'>
      <Typography variant="h4" sx={{fontWeight:800, fontSize:'36px', textAlign:'center', marginTop:  isMobile ? '32px' : '48px', color:'rgb(28, 45, 85)'}}>
        About Me
      </Typography>
      </div>
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ flexGrow: 1, height: '100vh'}} // Adjust height as needed
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center" gap={3} sx={{marginTop:  isMobile ? '18rem' : '-10rem'}}>
        <Grid item xs={10} md={4}>
          <Item sx={{color:'rgb(28, 45, 85)', textAlign:'left', fontSize: isMobile ? '15px' :'16px', backgroundColor:'#FDFDFD', boxShadow:'none', height: isMobile ? '100%' :'500px' }}>
          <h2>Get to know me!</h2>
          <p style={{ marginBottom: '1em', marginTop:'1rem', lineHeight: '1.6'}}>Hi! I'm Emerson L. Martinez, a <b>passionate</b> web developer, software developer, and computer programmer from the Philippines.</p>
          <p style={{ marginBottom: '1em', lineHeight: '1.6'}}> I recently graduated with a Bachelor of Science in Computer Science at Laguna University. My journey in the field of technology has been driven by my love for coding and solving complex problems.</p>
          <p style={{ marginBottom: '1em', lineHeight: '1.6'}}>I enjoy coding, which allows me to continuously learn and explore new technologies. I also love solving Rubiks cubes, a hobby that sharpens my problem-solving abilities and patience. Playing online games is another pastime that I find exciting, as it provides a fun way to relax and connect with friends.</p>
          <p style={{ marginBottom: '1em', lineHeight: '1.6'}}>I'm always eager to take on new challenges and collaborate with others to create impactful projects. <b style={{color:'#6600ff'}}>Let's connect and build something amazing together!</b></p>

          </Item>
        </Grid>
        <Grid item xs={10} md={4}>
  <Item sx={{ color: 'rgb(28, 45, 85)', textAlign: 'left', boxShadow: 'none', backgroundColor: '#FDFDFD', height: isMobile ? '100%' : '500px' }}>
    <h2>My Skills</h2>
    <Grid container spacing={1} sx={{ width: '300px', marginTop: '16px' }}>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px' , boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557'}}>HTML</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>CSS</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>Javascript</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>Python</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>Flask</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>C</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>React</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px' , boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>Node.Js</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>.NET</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px' , boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557'}}>Bootstrap</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>C++</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>Mantine</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>C#</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>Material UI</Item>
  </Grid>
  <Grid item>
    <Item sx={{ fontSize: '16px', fontWeight: 500, padding: '8px', boxShadow:'none', backgroundColor:'#f0f0f0', color:'#5C5557' }}>Github</Item>
  </Grid>
</Grid>

  </Item>
        </Grid>

      </Grid>
    </Box>
    
    </div>
  )
}

export default AboutMe
