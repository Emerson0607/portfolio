import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  backgroundColor: '#FDFDFD',
}));

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const projectData = [
    {
      name: 'My Portfolio',
      description: 'This portfolio marks my exciting journey into the world of web development, crafted entirely with React, Material UI, and Mantine components—a technology stack I\'m actively mastering to build modern, responsive web applications.',
      image: process.env.PUBLIC_URL + '/image/portfolio.png',
      technologies: ['HTML', 'CSS', 'Javascript', 'Node.js', 'React', 'Material UI', 'Mantine', 'Vercel']
    },
    {
      name: 'DSS CESU',
      description: 'A Decision Support System for Community Extension Services Using Machine Learning Model is a web application using Flask Python framework. The system leverages machine learning to analyze gathered data, assisting users in decision-making by predicting and recommending the top three programs for community implementation.',
      image: process.env.PUBLIC_URL + '/image/cesu.png',
      technologies: ['HTML', 'CSS', 'Javascript', 'Python', 'Flask', 'SQLite', 'Bootstrap']
    },
    {
      name: 'Juan\'s Sales and Inventory Management System',
      description: 'Developed for a client to streamline operations in their food business. This project showcases my expertise in building robust desktop applications using Vb.NET and integrating backend functionalities to ensure smooth business operations.',
      image: process.env.PUBLIC_URL + '/image/jsis.png',
      technologies: ['Visual Basic', '.NET Framework', 'GUNA Framework', 'MySQL']
    }
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#FDFDFD' }}>
      <div className='aboutMe_title'>
        <Typography variant="h4" sx={{ fontWeight: 800, fontSize: '36px', textAlign: 'center', marginTop: '48px', color: 'rgb(28, 45, 85)' }}>
          Projects
        </Typography>
      </div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1, height: '100vh' }} // Adjust height as needed
      >
        <Grid container gap={2} justifyContent="center" alignItems="center" sx={{ width: '100%', marginTop: '-10rem' }}>
          {projectData.map((project, index) => (
            <Grid item xs={3} key={index} sx={{ height: '500px' }}>
              <Card sx={{ width: '100%', height: '100%', margin: '0 auto', boxShadow: 'none', border: '1px solid #dedede' }}>
                <CardMedia
                  component="img"
                  alt="Project Image"
                  height="40%"
                  image={project.image}
                  onClick={() => handleOpen(project.image)}
                  style={{ cursor: 'pointer' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid item xs={4}>
                    <Item sx={{ color: 'rgb(28, 45, 85)', textAlign: 'left', height: '500px', width:'380px' }}>
                      <Grid container spacing={1} sx={{ width: '100%' }} >
                        {project.technologies.map((tech, index) => (
                          <Grid item key={index}>
                            <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7', color:'#717171' }}>{tech}</Item>
                          </Grid>
                        ))}
                      </Grid>
                    </Item>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-modal"
        aria-describedby="modal showing full image"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            maxWidth: '800px',
            maxHeight: '80vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <img src={selectedImage} alt="Full Project Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Box>
      </Modal>
    </div>
  );
}

export default Projects;
