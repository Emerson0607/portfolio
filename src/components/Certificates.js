import React, { useState, forwardRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { colors, fonts, layout } from '../theme/tokens';

// Sorted newest first. Add new certificates/seminars to the top of this list.
const certificates = [
  { title: 'AWS Technical Essentials', issuer: 'ECloudvalley', location: 'BGC, Taguig, Metro Manila', date: 'Apr 21, 2026' },
  { title: 'Data Privacy Awareness', issuer: 'DICT Region X', location: 'Online (Zoom)', date: 'Nov 17, 2025' },
  { title: 'Tips and Guide for Research Publication', issuer: 'Laguna University CCS Summit', location: 'Caliraya Resort, Lumban, Laguna', date: 'Mar 16, 2023' },
  { title: 'Level Up Your IT Career', issuer: 'Laguna University CCS Summit', location: 'Caliraya Resort, Lumban, Laguna', date: 'Mar 16, 2023' },
  { title: 'Personality Development in Workplace for IT and CS Professionals', issuer: 'Laguna University CCS Summit', location: 'Caliraya Resort, Lumban, Laguna', date: 'Mar 16, 2023' },
  { title: 'Integrating Artificial Intelligence and Augmented Reality for Enhanced Human-Machine Virtualization', issuer: 'Laguna University CCS Summit', location: 'Caliraya Resort, Lumban, Laguna', date: 'Mar 16, 2023' },
  { title: 'AI Lessons and Assessments Using Curipod', issuer: 'Creative Nation Academy', location: 'Online (Zoom)', date: 'Mar 11, 2023' },
  { title: 'Basic Troubleshooting: Building Strong IT Skills and Knowledge in Times of Pandemic', issuer: 'Polytechnic University of the Philippines', location: 'Online (Zoom)', date: 'May 2, 2022' },
  { title: 'How to Be You Po: Careers in Cybersecurity', issuer: 'Department of Information and Communications Technology', location: 'Online (Zoom)', date: 'Apr 21, 2022' },
  { title: "JPCS Tech Talks 2022: Let's Get Cloud", issuer: 'Junior Philippines Computer Society', location: 'Online (Zoom)', date: 'Apr 2, 2022' },
  { title: 'Information Security Awareness', issuer: 'DICT Region 3', location: 'Online (Zoom / YouTube Live)', date: 'Mar 30, 2022' },
  { title: 'Tech Me Up: Data Science, Cloud Technology, and AI/ML', issuer: 'Google Developer Student Clubs, University of San Agustin', location: 'Online (Zoom)', date: 'Jan 26, 2022' },
  { title: 'Tech Me Up: UI/UX, Web Development, and Mobile Development', issuer: 'Google Developer Student Clubs, University of San Agustin', location: 'Online (Zoom)', date: 'Jan 25, 2022' },
  { title: 'Tech Me Up: Graphic Design, Animation, and Video Editing', issuer: 'Google Developer Student Clubs, University of San Agustin', location: 'Online (Zoom)', date: 'Jan 24, 2022' },
  { title: 'Gearing Up Student Skills Towards Industry Demand', issuer: 'Laguna University', location: 'Brgy. Bubukal, Sta. Cruz, Laguna', date: 'Oct 22, 2021' },
];

const Certificates = forwardRef((props, ref) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certificates : certificates.slice(0, 6);

  return (
    <Box ref={ref} sx={{ width: '100vw', minHeight: '100vh', backgroundColor: colors.paper, py: isMobile ? '64px' : '96px' }}>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: '13px', letterSpacing: '0.14em', color: colors.accent, textAlign: 'center' }}>
        CERTIFICATES &amp; SEMINARS
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
        Conferences &amp; training
      </Typography>

      <Box display="flex" justifyContent="center">
        <Box sx={{ width: isMobile ? '88%' : '78%', maxWidth: layout.maxWidth, mt: isMobile ? 4 : 7 }}>
          {visible.map((cert, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: isMobile ? 'flex-start' : 'center',
                gap: isMobile ? '4px' : '24px',
                py: '18px',
                borderTop: `1px solid ${colors.line}`,
                '&:hover .cert-title': { color: colors.accent },
              }}
            >
              <Typography sx={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.faint, width: isMobile ? 'auto' : '110px', flexShrink: 0 }}>
                {cert.date}
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  className="cert-title"
                  sx={{ fontFamily: fonts.body, fontWeight: 500, fontSize: isMobile ? '15px' : '16px', color: colors.ink, transition: 'color 0.2s ease' }}
                >
                  {cert.title}
                </Typography>
                <Typography sx={{ fontFamily: fonts.body, fontSize: '13px', color: colors.slate, mt: 0.25 }}>
                  {cert.issuer} · {cert.location}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {!showAll && certificates.length > 6 && (
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            onClick={() => setShowAll(true)}
            sx={{
              fontFamily: fonts.body,
              textTransform: 'none',
              fontWeight: 500,
              borderRadius: '999px',
              color: colors.ink,
              borderColor: colors.line,
              px: 3,
              '&:hover': { borderColor: colors.accent, color: colors.accent, backgroundColor: colors.accentSoft },
            }}
          >
            View all {certificates.length}
          </Button>
        </Box>
      )}
    </Box>
  );
});

export default Certificates;
