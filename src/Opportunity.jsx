import React from 'react';
import { Typography, Container } from '@material-ui/core';
import building from './static/research_images/3D-printed-building-Dubai.jpg'
const Opportunity = () => {
  return(
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        My Research Opportunity
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        At the beginning of my senior year, I was determined of going into graduate school. I never really thought about going into graduate
        until the summer after my junior year in 2023. This was mainly due to my school, the University of Nebraska Lincoln, establishing the
        accelerated program for software engineering students to receive a masters degree in computer science with only one additional year after
        I graduate with my masters. This was an opportunity that I believed to be extremely valuable, not only for my career, but for myself as 
        a student as well because, while I am still young, I will have the capacity to continue on learning at an accelerated rate.
      </Typography>
      <div style={{ textAlign:"center" }}>
        <img src={building} align="center" height="250" alt="3D printed building in Dubai"/>
        <Typography>
          This image showcases an image of a building that was 3D printed. This building is located in Dubai, and it is the biggest 3D printed
          building in the world!
        </Typography>
        <br/>
      </div>
      <Typography variant="h6" color="textSecondary" paragraph>
        To get started on getting an opportunity with graduate school, I decided to do research for the university to get familiar with how
        graduate research would be like. I contacted Dr. Sris-an from the School of Computing on whether he was in charge of any research projects
        and luckily enough he did, and that he was looking for undergraduate to help him on the tasks. Dr. Srisa-an's research team is working on a
        solution to detect malicious or bad 3D model files. What causes is this problem is that, malicious people on the internet go around and inject
        what is known as voids or hollow spaces inside of 3D models that would be used for 3D printing. What those spaces inside of the models cause is
        that the object, when 3D printed, becomes fragile and its durability gets worse. This is a problem because as 3D printing is becoming
        more important it becomes essential to standard users to know that the file that they will be handling is safe.
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        My task for this project is to collect 3D models from the internet to find 3D models with voids or hollow spaces inside of the model.
        The goal of this task is to be able to find 3D models whose voids are intentional and that they are good for the model. With the data from the models,
        we will be able to create a program that would be able to determine whether a model with a void or space inside of it is intentional or not.
      </Typography>
    </Container>
  );
};

export default Opportunity;