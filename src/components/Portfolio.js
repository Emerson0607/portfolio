import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { TypeAnimation } from 'react-type-animation';
import emeee from '../image/emeee.JPG';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/ibm-plex-mono/500.css';
import { colors, fonts } from '../theme/tokens';
import '../CSS/Portfolio.css';

const socials = [
  { icon: FacebookIcon, href: 'https://web.facebook.com/people/Emerson-Martinez/100010291444658/', label: 'Facebook' },
  { icon: EmailIcon, href: 'mailto:martinezemerson52@gmail.com', label: 'Email' },
  { icon: GitHubIcon, href: 'https://github.com/Emerson0607', label: 'Github' },
  { icon: LinkedInIcon, href: 'https://www.linkedin.com/in/emerson-martinez-25510824b/', label: 'Linkedin' },
];

const handleDownload = () => {
  const url = process.env.PUBLIC_URL + '/Emerson_Martinez_Resume.pdf';
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Emerson_Martinez_Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Portfolio = ({ onArrowClick }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleArrowClick = () => {
    if (onArrowClick) onArrowClick('About');
  };

  return (
    <div>
      <Box
        sx={{ minHeight: '100vh', width: '100vw', backgroundColor: colors.paper, pt: isMobile ? '96px' : 0 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container sx={{ width: isMobile ? '88%' : '78%', maxWidth: 1080 }} alignItems="center" spacing={isMobile ? 4 : 6}>
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Typography sx={{ fontFamily: fonts.mono, fontSize: '13px', letterSpacing: '0.14em', color: colors.accent, mb: 2 }}>
              WEB DEVELOPER — PHILIPPINES
            </Typography>

            <Typography
              sx={{
                fontFamily: fonts.display,
                fontWeight: 700,
                color: colors.ink,
                fontSize: isMobile ? '42px' : '64px',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              Emerson Martinez.
            </Typography>

            <Typography
              sx={{
                fontFamily: fonts.display,
                fontWeight: 500,
                fontSize: isMobile ? '20px' : '28px',
                color: colors.slate,
                mt: 1.5,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              I build
              <TypeAnimation
                sequence={[' web applications', 2600, ' developer tools', 2600, ' software systems', 2600]}
                speed={20}
                repeat={Infinity}
                style={{ color: colors.accent, fontWeight: 700 }}
              />
            </Typography>

            <Typography
              sx={{
                fontFamily: fonts.body,
                fontSize: isMobile ? '15px' : '17px',
                lineHeight: 1.7,
                color: colors.slate,
                mt: 3,
                maxWidth: 520,
              }}
            >
              Passionate about coding and solving complex problems, specializing in
              interactive web applications. I enjoy building thoughtful solutions
              and bringing ideas to life with a keen eye for detail.
            </Typography>

            <Stack direction={isMobile ? 'column' : 'row'} spacing={2} alignItems={isMobile ? 'flex-start' : 'center'} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                disableElevation
                onClick={handleDownload}
                sx={{
                  fontFamily: fonts.body,
                  textTransform: 'none',
                  fontWeight: 500,
                  backgroundColor: colors.ink,
                  color: '#fff',
                  borderRadius: '999px',
                  px: 3,
                  py: 1.1,
                  '&:hover': { backgroundColor: colors.accent },
                }}
              >
                Download Resume
              </Button>

              <Stack direction="row" spacing={0.5}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <IconButton
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{
                      color: colors.slate,
                      transition: 'color 0.2s ease',
                      '&:hover': { color: colors.accent, backgroundColor: colors.accentSoft },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }} display="flex" justifyContent="center">
            <Box
              sx={{
                width: isMobile ? 200 : 320,
                height: isMobile ? 200 : 320,
                borderRadius: '24px',
                border: `1px solid ${colors.line}`,
                overflow: 'hidden',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  boxShadow: `inset 0 0 0 1px ${colors.line}`,
                  borderRadius: '24px',
                },
              }}
            >
              <img
                src={emeee}
                alt="Emerson Martinez"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <div className="arrowBox" onClick={handleArrowClick}>
        <div className="arrow" style={{ display: isMobile ? 'none' : 'block' }}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;