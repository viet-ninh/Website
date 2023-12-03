import React from 'react';
import { Typography, Grid, Container, Button } from '@material-ui/core';

const Home = () =>{
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
          Hello!
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          I am Viet Ninh, and I am a software engineer
        </Typography>
        <div>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item>
              <Button variant="contained" href='tel:4027709505'>
                Call Me
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" href='mailto:vietquocninh@gmail.com'>
                Email Me
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Home;