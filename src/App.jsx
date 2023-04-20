import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Avatar } from '@material-ui/core';

import useStyles from './css/App';

import profile from "./static/images/profile-2.jpg";

/*
To change the icon look at material-ui's icons
*/

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline/>
        <AppBar position="relative" className={classes.navbar}>
          <Toolbar>          
              <Avatar alt="Viet Ninh" src={profile} sx={{ width: 56, height: 56 }} />
                <Typography variant = "h6" style={{padding: "10px"}}>
                  Viet Ninh
                </Typography>
              </Toolbar>
        </AppBar>
      <main>
        <div className='classes.container'>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Viet Ninh
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Hello! Welcome to my website!
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

        </div>
      </main>
    </>
  )
}

export default App;
