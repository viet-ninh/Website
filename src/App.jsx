import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Typography, AppBar,CssBaseline, Toolbar, Container, Button, Avatar, Divider } from '@material-ui/core';

import useStyles from './css/App';

import profile from "./static/images/profile.jpg";

import VSA from './VSA';
import Home from './Home';
import Research from './Research';
/*
To change the icon look at material-ui's icons
*/

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <Container>
        <AppBar position="relative" className={classes.navbar}>
          <Toolbar>
            <Avatar alt="Viet Ninh" src={profile} sx={{ width: 56, height: 56 }} />
            <Typography variant="h6" style={{ padding: "10px" }}>
              Viet Ninh
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Navigation Links */}
          <div>
            <nav>
              <ul>
                <Button variant="contained" component={Link} to="/" style={{margin: "0px 8px 8px 0px"}}>
                  Home
                </Button>
                <Button variant="contained" component={Link} to="/vsa" style={{margin: "0px 8px 8px 0px"}}>
                  Leadership Experience
                </Button>
                <Button variant="contained" component={Link} to="/research" style={{margin: "0px 8px 8px 0px"}}>
                  Research Experience
                </Button>
              </ul>
            </nav>
            <Divider/>
            {/* Routing */}
            <br/>
            <Routes>
              <Route path="/research" element={<Research />} />
              <Route path="/vsa" element={<VSA />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </main>
      </Container>
    </Router>
  );
};

  // return (
  //   <>
  //     <CssBaseline/>
  //       <AppBar position="relative" className={classes.navbar}>
  //         <Toolbar>          
  //             <Avatar alt="Viet Ninh" src={profile} sx={{ width: 56, height: 56 }} />
  //               <Typography variant = "h6" style={{padding: "10px"}}>
  //                 Viet Ninh
  //               </Typography>
  //             </Toolbar>
  //       </AppBar>
  //     <main>
  //       <div className='classes.container'>
  //         <Container maxWidth="sm">
  //           <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
  //             Hello!
  //           </Typography>
  //           <Typography variant="h6" align="center" color="textSecondary" paragraph>
  //           I am Viet Ninh, and I am a software engineer
  //           </Typography>
  //           <div>

  //             <Grid container spacing={2} justifyContent='center'>
  //               <Grid item>
  //                 <Button variant="contained" href='tel:4027709505'>
  //                   Call Me
  //                 </Button>
  //               </Grid>
  //               <Grid item>
  //                 <Button variant="outlined" color="primary" href='mailto:vietquocninh@gmail.com'>
  //                   Email Me
  //                 </Button>
  //               </Grid>
  //             </Grid>

  //           </div>
  //         </Container>

  //       </div>
  //     </main>
  //   </>
  // )

export default App;
