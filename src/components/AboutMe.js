import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { colors, fonts, layout } from '../theme/tokens';
import '../CSS/AboutMe.css';

const skills = [
  'HTML', 'CSS', 'Javascript', 'Python', 'Flask', 'C', 'React', 'Node.js',
  '.NET', 'Bootstrap', 'C++', 'Mantine', 'C#', 'Material UI', 'Github', 
  'Laravel', 'Java', 'Django', 'Machine Learning'
];

const AboutMe = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', backgroundColor: colors.paper, py: isMobile ? '64px' : '96px' }}>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: '13px', letterSpacing: '0.14em', color: colors.accent, textAlign: 'center' }}>
        ABOUT
      </Typography>
      <Typography
        sx={{
          fontFamily: fonts.display,
          fontWeight: 700,
          fontSize: isMobile ? '32px' : '44px',
          textAlign: 'center',
          color: colors.ink,
          mt: 1,
        }}
      >
        Get to know me
      </Typography>

      <Box display="flex" justifyContent="center">
        <Grid
          container
          spacing={isMobile ? 4 : 8}
          sx={{ width: isMobile ? '88%' : '78%', maxWidth: layout.maxWidth, mt: isMobile ? 3 : 6 }}
        >
          <Grid item xs={12} md={7}>
            <Box sx={{ fontFamily: fonts.body, color: colors.ink }}>
              <Typography sx={{ fontFamily: fonts.body, fontSize: isMobile ? '15px' : '17px', lineHeight: 1.8, color: colors.slate, mb: 2.5 }}>
                Hi! I'm Emerson L. Martinez, a passionate web developer, software
                developer, and computer programmer from the Philippines.
              </Typography>
              <Typography sx={{ fontFamily: fonts.body, fontSize: isMobile ? '15px' : '17px', lineHeight: 1.8, color: colors.slate, mb: 2.5 }}>
                I recently graduated with a Bachelor of Science in Computer
                Science at Laguna University. My journey in technology has been
                driven by a love for coding and solving complex problems.
              </Typography>
              <Typography sx={{ fontFamily: fonts.body, fontSize: isMobile ? '15px' : '17px', lineHeight: 1.8, color: colors.slate, mb: 2.5 }}>
                I enjoy coding, which lets me continuously learn and explore new
                technologies. I also love solving Rubik's cubes, a hobby that
                sharpens my problem-solving and patience, and playing online
                games as a fun way to relax and connect with friends.
              </Typography>
              <Typography sx={{ fontFamily: fonts.body, fontSize: isMobile ? '15px' : '17px', lineHeight: 1.8, color: colors.ink, fontWeight: 500 }}>
                I'm always eager to take on new challenges and collaborate with
                others — let's connect and build something amazing together.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: '20px', color: colors.ink, mb: 2 }}>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skills.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    fontFamily: fonts.mono,
                    fontSize: '13px',
                    color: colors.ink,
                    border: `1px solid ${colors.line}`,
                    borderRadius: '999px',
                    px: '14px',
                    py: '6px',
                    backgroundColor: colors.surface,
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                    '&:hover': { borderColor: colors.accent, color: colors.accent },
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMe;