import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';

/*
To change the icon look at material-ui's icons
*/
import { Face } from '@material-ui/icons';

const App = () => {
  return (
    <>
      <CssBaseline/>
        <AppBar position="relative">
          <Toolbar>
                <Face />
                <Typography variant = "h6">
                  Viet Ninh
                </Typography>
              </Toolbar>
        </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="textPrimary" paragraph>
              Hello! Welcome to Viet Ninh's Website.
            </Typography>
          </Container>
        </div>
      </main>
    </>
  )
}

export default App;
