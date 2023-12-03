import React from 'react';
import { Typography, Grid, Container, Button } from '@material-ui/core';
import vsa_gbm from './static/vsa_images/VSA_Food_GBM.JPG';

const VSA = () =>{
  return (
    <Container maxWidth="med">
      <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
          My Leadership Experience
        </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        This year, I was fortunate enough to have a leadership role for a cultural RSO at UNL called the Vietnamese Student Association (VSA).
        is student organization with the mission to promote, preserve, and spread awareness of Vietnamese culture throughout the UNL campus.
        We aim to create an environment where Vietnamese and Vietnamese American students can come and find a place on campus to meet new friends
        and find leadership opportunities.
      </Typography>
      <div style={{ textAlign:"center" }}>
        <img src={vsa_gbm} align="center" alt="description"/>
      </div>
      <Typography variant="h6" color="textSecondary" paragraph>
        With my role this year, I am the internal vice president. What my important tasks are throughout the year is that I plan with my team of 3
        to plan our general body meetings with the goal of having at least 2 meetings each month. To reach that goal, this requires us to plan far ahead
        since we need time to brainstorm what topic we want to do, research the topic, and then plan the activity so that our members can stay 
        engaged throughout the meeting.
      </Typography>
    </Container>
  );
};

export default VSA;