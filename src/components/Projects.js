import React, { useState, forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';
import { colors, fonts, layout } from '../theme/tokens';

const Projects = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

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
    {
      name: 'San Isidro Blotter System',
      description: 'A comprehensive blotter system to facilitate incident recording and management for efficient barangay operations.',
      image: process.env.PUBLIC_URL + '/image/sibs.png',
      technologies: ['Visual Basic', '.NET Framework', 'GUNA Framework', 'MySQL'],
    },
    {
      name: 'MSTLUSTUDENT Blogspot',
      description: 'Built in 2021 during the COVID-19 pandemic on the Blogspot platform, documenting the impact of COVID-19 on our lives.',
      image: process.env.PUBLIC_URL + '/image/pandemic.png',
      technologies: ['Blogspot'],
    },
    {
      name: 'CHAD POS',
      description: 'A Point of Sale system for sari-sari stores, with barcode generation for items and barcode scanner integration for seamless checkout.',
      image: process.env.PUBLIC_URL + '/image/chadpos.png',
      technologies: ['Visual Basic', '.NET Framework', 'GUNA Framework', 'MySQL', 'Firebase', 'Kotlin'],
    },
  ];

  const visibleProjects = showAllProjects ? projectData : projectData.slice(0, 3);

  return (
    <Box ref={ref} sx={{ width: '100vw', minHeight: '100vh', backgroundColor: colors.surface, py: isMobile ? '64px' : '96px' }}>
      <Typography sx={{ fontFamily: fonts.mono, fontSize: '13px', letterSpacing: '0.14em', color: colors.accent, textAlign: 'center' }}>
        PROJECTS
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
        Things I've built
      </Typography>

      <Box display="flex" justifyContent="center" sx={{ mt: isMobile ? 4 : 7 }}>
        <Grid container spacing={3} justifyContent="center" sx={{ width: isMobile ? '88%' : '78%', maxWidth: layout.maxWidth }}>
          {visibleProjects.map((project, index) => (
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
                <Box
                  component="img"
                  src={project.image}
                  alt={project.name}
                  onClick={() => handleOpen(project.image)}
                  sx={{ width: '100%', height: '190px', objectFit: 'cover', cursor: 'pointer', display: 'block' }}
                />
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
                        sx={{
                          fontFamily: fonts.mono,
                          fontSize: '11px',
                          color: colors.slate,
                          border: `1px solid ${colors.line}`,
                          borderRadius: '6px',
                          px: '8px',
                          py: '3px',
                        }}
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

      {!showAllProjects && (
        <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
          <Button
            variant="outlined"
            onClick={() => setShowAllProjects(true)}
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
            View all projects
          </Button>
        </Box>
      )}

      <Modal open={open} onClose={handleClose} aria-labelledby="image-modal" aria-describedby="modal showing full image">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            maxWidth: '800px',
            maxHeight: '80vh',
            bgcolor: colors.surface,
            borderRadius: '16px',
            boxShadow: 24,
            p: 2,
            textAlign: 'center',
          }}
        >
          <img src={selectedImage} alt="Full Project" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '8px' }} />
        </Box>
      </Modal>
    </Box>
  );
});

export default Projects;