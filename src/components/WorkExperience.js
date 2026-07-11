import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { colors, fonts, layout } from '../theme/tokens';

// Add more roles here over time — the layout supports any number of entries.
const experience = [
  {
    title: 'Computer Programmer',
    org: 'Management Information System Office, Laguna University',
    start: 'Jan 2025',
    end: 'Present',
    duties: [
      "Design, develop, and maintain Laguna University's core systems: iLearnU, eRecord, LUAT, the Queueing System, and MDRMS (Clinic).",
      'Analyze and optimize system performance, responsiveness, and interface design.',
      'Implement features such as examination modules, logging, dynamic notifications, and authentication.',
      'Maintain database structures and improve data validation, security, and session management.',
      'Manage workflows across systems: application processing (LUAT), grade submission (eRecord), queue handling, and medical clearance (MDRMS).',
      'Build admin tools for monitoring user activity, logging, exam restrictions, and settings configuration.',
      'Coordinate system updates and bug fixes based on institutional needs and feedback.',
      'Provide system-wide support for secure logins, enrollment validation, and account management.',
    ],
    highlights: [
      'Enhanced and maintained iLearnU, eRecord, LUAT, the Queueing System, and MDRMS.',
      'Redesigned the queueing interface and optimized client polling, video rendering, and waiting-list logic.',
      'Added device/browser tracking and tab/window monitoring during exams, plus IP-based secure login.',
      'Rolled out multi-email verification, session handling, and exam scoring analysis in iLearnU.',
      "Revamped LUAT's application form with validation, email notifications, and CSV export.",
      'Built a centralized settings module and improved control panels for students and faculty.',
    ],
  },
];

const WorkExperience = forwardRef((props, ref) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box ref={ref} sx={{ width: '100vw', minHeight: '100vh', backgroundColor: colors.surface, py: isMobile ? '64px' : '96px' }}>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: '13px', letterSpacing: '0.14em', color: colors.accent, textAlign: 'center' }}>
        EXPERIENCE
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
        Where I've worked
      </Typography>

      <Box display="flex" justifyContent="center">
        <Box sx={{ width: isMobile ? '88%' : '78%', maxWidth: layout.maxWidth, mt: isMobile ? 4 : 7 }}>
          {experience.map((role, index) => (
            <Grid
              container
              key={role.title + index}
              spacing={isMobile ? 2 : 4}
              sx={{
                borderTop: `1px solid ${colors.line}`,
                py: isMobile ? 4 : 5,
              }}
            >
              {/* left rail: dates + org */}
              <Grid item xs={12} md={3}>
                <Typography sx={{ fontFamily: fonts.mono, fontSize: '13px', color: colors.accent }}>
                  {role.start} — {role.end}
                </Typography>
                <Typography sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: '20px', color: colors.ink, mt: 1 }}>
                  {role.title}
                </Typography>
                <Typography sx={{ fontFamily: fonts.body, fontSize: '14px', color: colors.slate, mt: 0.5 }}>
                  {role.org}
                </Typography>
              </Grid>

              {/* right: duties + highlights */}
              <Grid item xs={12} md={9}>
                <Typography sx={{ fontFamily: fonts.display, fontWeight: 600, fontSize: '14px', color: colors.ink, mb: 1.5 }}>
                  What the role covers
                </Typography>
                <Box component="ul" sx={{ m: 0, mb: 3, pl: '20px' }}>
                  {role.duties.map((d, i) => (
                    <Typography
                      component="li"
                      key={i}
                      sx={{ fontFamily: fonts.body, fontSize: '15px', lineHeight: 1.7, color: colors.slate, mb: 0.75 }}
                    >
                      {d}
                    </Typography>
                  ))}
                </Box>

                <Typography sx={{ fontFamily: fonts.display, fontWeight: 600, fontSize: '14px', color: colors.ink, mb: 1.5 }}>
                  Highlights
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: '20px' }}>
                  {role.highlights.map((h, i) => (
                    <Typography
                      component="li"
                      key={i}
                      sx={{ fontFamily: fonts.body, fontSize: '15px', lineHeight: 1.7, color: colors.slate, mb: 0.75 }}
                    >
                      {h}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </Box>
  );
});

export default WorkExperience;
