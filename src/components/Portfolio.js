import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import emeee from '../image/emeee.JPG';
import linkedin from '../image/linkedin.png';
import gmail from '../image/gmail.png';
import facebook from '../image/facebook.png';
import github from '../image/github.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TypeAnimation } from 'react-type-animation';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../CSS/Portfolio.css';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center'
}));

const textStyles = {
  textAlign: 'left',
  fontFamily: 'Roboto, sans-serif',
};

const avatarAttribute = {
  width: '32px',
  height: '32px',
  cursor: 'pointer'
};

//For CV download
const handleDownload = () => {
  const url = process.env.PUBLIC_URL + '/ELM_CV.pdf';
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Emerson_CV.pdf'); // Set the filename for the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Portfolio = ({ onArrowClick }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleArrowClick = () => {
    if (onArrowClick) {
      onArrowClick('About'); // Notify parent component about the click
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, height: '100vh', width: '100vw' }} display="flex" justifyContent="center" alignItems="center">
        <Grid container sx={{ width: '80%' }}>
          <Grid justifyContent="center" alignItems="center" item xs={12} md={5}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: '0 0 0 0' }}>
              <img src={emeee} style={{ marginTop: '16px', width: 300, height: 300, borderRadius: '50%' }} alt="eme" />
            </Item>
          </Grid>
          <Grid item xs={12} md={7}>
            <Item
              style={{
                ...textStyles,
                backgroundColor: 'transparent',
                boxShadow: '0 0 0 0',
                marginLeft: '48px'
              }}
              sx={{ height: 500 }}
            >
              <div style={{ color: 'rgb(28, 45, 85)' }}>
                <h1 style={{ fontSize: '70px' }}>Hi, I'm Emerson</h1>
                <h1 style={{ fontWeight: 500 }}> I'm a
                  <TypeAnimation
                    sequence={[
                      " Web Developer",
                      3000,
                      " Computer Programmer",
                      3000,
                      " Software Developer",
                      3000,
                    ]}
                    speed={20}
                    repeat={Infinity}
                    style={{ fontSize: '30px', fontWeight: 800, color: '#6600ff', fontFamily: 'Roboto, sans-serif' }}
                  />
                </h1>
                <p style={{ maxWidth: 500, fontSize: '20px', marginTop: '16px', lineHeight: '32px', color: '#898989', fontFamily: 'Roboto, sans-serif' }}>Passionate about coding and solving complex problems, specializing in crafting interactive web applications. I enjoy creating innovative solutions and bringing online visions to life with a keen eye for aesthetics.</p>

                <Button variant="outlined" sx={{ mt: '32px', color: 'rgb(28, 45, 85)', textTransform: 'none' }} onClick={handleDownload}>Download CV</Button>
                <Stack direction="row" spacing={2} sx={{ mt: '24px' }}>
                  <a href="https://web.facebook.com/people/Emerson-Martinez/100010291444658/" target="_blank" rel="noopener noreferrer">
                    <img style={avatarAttribute} alt="Facebook" src={facebook} />
                  </a>
                  <a href="mailto:martinezemerson52@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img style={avatarAttribute} alt="Email" src={gmail} />
                  </a>
                  <a href="https://github.com/Emerson0607" target="_blank" rel="noopener noreferrer">
                    <img style={avatarAttribute} alt="Github" src={github} />
                  </a>
                  <a href="https://www.linkedin.com/in/emerson-martinez-25510824b/" target="_blank" rel="noopener noreferrer">
                    <img style={avatarAttribute} alt="Linkedin" src={linkedin} />
                  </a>
                </Stack>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div className="arrowBox" onClick={handleArrowClick}>
        <div className="arrow"><span></span></div>
      </div>
    </div>
  )
}

export default Portfolio;
