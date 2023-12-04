import React from 'react';
import { Typography, Grid, Container, Button } from '@material-ui/core';
import vsa_gbm from './static/vsa_images/VSA_Food_GBM.JPG';
import vsa_folk from './static/vsa_images/VSA_Folk_Games.JPG';

const VSA = () =>{
  return (
    <Container maxWidth="med">
      <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
          My Leadership Experience
        </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        This year, I was fortunate enough to have a leadership role for a cultural RSO at UNL called the Vietnamese Student Association (VSA). VSA
        is student organization with the mission to promote, preserve, and educate students on campus about Vietnamese culture.
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
      <Typography variant="h6" color="textSecondary" paragraph>
        What I have learned and gained from this experience is the ability to speak and give presentations to my peers. It has helped me get prepared
        and fix my stutter for when I give presentations. Although my presentations skills are still not perfect, it is still a step in the right direction.
        Through these meetings, I have been able to hone these skills which will help me lead meetings for when I am out in my career as a software engineer.
        It will be important to have these skills, when I am demonstrating a new piece of software to the person who is in charge of me, and explain things
        in a way where it makes sense.
      </Typography>      
      <div style={{ textAlign:"center" }}>
        <img src={vsa_folk} align="center" alt="description"/>
      </div>
      <Typography variant="h6" color="textSecondary" paragraph>
        Along with my leadership role, I was fortunate enough to be enrolled in a class that can help me develop my leadership skills. I was able
        to take UHON 201H: Leadership in Action. Through this class I was able to attend a workshop that helped me learn a various amount of techniques
        from the instructor and from my peers on how I can be more inclusive to the community around me. Some of these techniques that I have incorporated into
        my leadership role in my RSO is that I incorporated ice breakers that allowed people to be active and discuss with each other. The picture above showcases
        one of our general body meetings incorprating some of the things that I learned from my peers in the workshops.
      </Typography>
    </Container>
  );
};

export default VSA;