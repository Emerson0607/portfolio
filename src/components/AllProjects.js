import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { colors, fonts, layout } from '../theme/tokens';

const projectData = [
  {
    name: 'My Portfolio',
    description: "This portfolio marks my journey into web development, crafted with React, Material UI, and Mantine — a stack I'm actively mastering to build modern, responsive web applications.",
    image: process.env.PUBLIC_URL + '/image/portfolio.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Node.js', 'React', 'Material UI', 'Mantine', 'Vercel'],
  },
  {
    name: 'DSS CESU',
    description: 'A Decision Support System for Community Extension Services using a machine learning model, built with Flask. Analyzes gathered data to predict and recommend the top three programs for community implementation.',
    image: process.env.PUBLIC_URL + '/image/cesu.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Python', 'Flask', 'SQLite', 'Bootstrap'],
  },
  {
    name: "Juan's Sales and Inventory Management System",
    description: 'Built for a client to streamline operations in their food business — a desktop application using VB.NET with backend functionality for smooth day-to-day operations.',
    image: process.env.PUBLIC_URL + '/image/jsis.png',
    technologies: ['Visual Basic', '.NET Framework', 'GUNA Framework', 'MySQL'],
  },
];

const AllProjects = () => {
  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', backgroundColor: colors.paper, py: '80px' }}>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: '13px', letterSpacing: '0.14em', color: colors.accent, textAlign: 'center' }}>
        PROJECTS
      </Typography>
      <Typography
        sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: '44px', textAlign: 'center', color: colors.ink, mt: 1, mb: 6 }}
      >
        All projects
      </Typography>

      <Box display="flex" justifyContent="center">
        <Grid container spacing={3} sx={{ width: '78%', maxWidth: layout.maxWidth }}>
          {projectData.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  height: '100%',
                  border: `1px solid ${colors.line}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: colors.surface,
                  transition: 'border-color 0.2s ease, transform 0.2s ease',
                  '&:hover': { borderColor: colors.accent, transform: 'translateY(-2px)' },
                }}
              >
                <Box component="img" src={project.image} alt={project.name} sx={{ width: '100%', height: '190px', objectFit: 'cover', display: 'block' }} />
                <Box sx={{ p: '20px' }}>
                  <Typography sx={{ fontFamily: fonts.display, fontWeight: 700, fontSize: '18px', color: colors.ink, mb: 1 }}>
                    {project.name}
                  </Typography>
                  <Typography sx={{ fontFamily: fonts.body, fontSize: '14px', lineHeight: 1.65, color: colors.slate, mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.technologies.map((tech, i) => (
                      <Box
                        key={i}
                        sx={{ fontFamily: fonts.mono, fontSize: '11px', color: colors.slate, border: `1px solid ${colors.line}`, borderRadius: '6px', px: '8px', py: '3px' }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AllProjects;