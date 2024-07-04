import React from 'react';
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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
  backgroundColor: '#FDFDFD',
}));

const Projects = () => {
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
          <Grid item xs={3} sx={{ height: '500px' }}>
            <Card sx={{ width: '100%', height: '100%', margin: '0 auto', boxShadow: 'none', border: '1px solid #dedede' }}>
              <CardMedia
                component="img"
                alt="Project Image"
                height="40%"
                image={process.env.PUBLIC_URL + '/image/portfolio.png'} 
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                  My Portfolio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                This portfolio marks my exciting journey into the world of web development, crafted entirely with React, Material UI, and Mantine components—a technology stack I'm actively mastering to build modern, responsive web applications.
                </Typography>
              </CardContent>
              <CardActions>
                <Grid item xs={4}>
                  <Item sx={{ color: 'rgb(28, 45, 85)', textAlign: 'left', height: '500px', width:'380px' }}>
                   
                    <Grid container spacing={1} sx={{ width: '100%'}} >
                        
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7',color:'#717171'  }}>HTML</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px',  backgroundColor: '#D9E3F7',color:'#717171'  }}>CSS</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px',  backgroundColor: '#D9E3F7',color:'#717171'  }}>Javascript</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px',  backgroundColor: '#D9E3F7',color:'#717171'  }}>Node.js</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7',color:'#717171' }}>React</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7', color:'#717171' }}>Material UI</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7', color:'#717171' }}>Mantine</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7', color:'#717171' }}>Vercel</Item>
                      </Grid>
                    
                    </Grid>
                  </Item>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} sx={{ height: '500px' }}>
            <Card sx={{ width: '100%', height: '100%', margin: '0 auto', boxShadow: 'none', border: '1px solid #dedede' }}>
              <CardMedia
                component="img"
                alt="Project Image"
                height="40%"
                image={process.env.PUBLIC_URL + '/image/cesu.png'} 
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                  DSS CESU
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A Decision Support System for Community Extension Services Using Machine Learning Model is a web application using Flask Python framework. The system leverages machine learning to analyze gathered data, assisting users in decision-making by predicting and recommending the top three programs for community implementation.
                </Typography>
              </CardContent>
              <CardActions>
                <Grid item xs={4}>
                  <Item sx={{ color: 'rgb(28, 45, 85)', textAlign: 'left', height: '500px', width:'380px' }}>
                   
                    <Grid container spacing={1} sx={{ width: '100%'}} >
                        
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px',backgroundColor: '#D9E3F7',color:'#717171'  }}>HTML</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px',  backgroundColor: '#D9E3F7',color:'#717171'  }}>CSS</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px',  backgroundColor: '#D9E3F7',color:'#717171'  }}>Javascript</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7',color:'#717171'  }}>Python</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px',  backgroundColor: '#D9E3F7',color:'#717171' }}>Flask</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7', color:'#717171' }}>SQLite</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7', color:'#717171' }}>Bootstrap</Item>
                      </Grid>
                    
                    </Grid>
                  </Item>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3} sx={{ height: '500px' }}>
            <Card sx={{ width: '100%', height: '100%', margin: '0 auto', boxShadow: 'none', border: '1px solid #dedede' }}>
              <CardMedia
                component="img"
                alt="Project Image"
                height="40%"
                image={process.env.PUBLIC_URL + '/image/jsis.png'} 
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                  Juan's Sales and Inventory Management System
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Developed for a client to streamline operations in their food business. This project showcases my expertise in building robust desktop applications using Vb.NET and integrating backend functionalities to ensure smooth business operations.
                </Typography>
              </CardContent>
              <CardActions>
                <Grid item xs={4}>
                  <Item sx={{ color: 'rgb(28, 45, 85)', textAlign: 'left', height: '500px', width:'380px' }}>
                   
                    <Grid container spacing={1} sx={{ width: '100%'}} >
                        
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7',color:'#717171'  }}>Visual Basic</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7',color:'#717171'  }}>.NET Framework</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px', backgroundColor: '#D9E3F7',color:'#717171'  }}>GUNA Framework</Item>
                      </Grid>
                      <Grid item>
                        <Item sx={{ fontSize: '12px', fontWeight: 500, padding: '5px',  backgroundColor: '#D9E3F7',color:'#717171'  }}>MySQL</Item>
                      </Grid>
             
                    </Grid>
                  </Item>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Projects;
