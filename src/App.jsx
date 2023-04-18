import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';

import useStyles from './css/App';
/*
To change the icon look at material-ui's icons
*/
import { Face } from '@material-ui/icons';

const App = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline/>
        <AppBar position="relative" className={classes.navbar}>
          <Toolbar>
                <Face />
                <Typography variant = "h6">
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
              Hello, welcome to my website!
            </Typography>
            <div>

              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant="contained">
                    Call Me
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
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
