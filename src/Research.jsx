import React from 'react';
import { Typography, Container } from '@material-ui/core';
import thingiverse_image from './static/research_images/thingiverse_image.png'
import model_image from './static/research_images/prusaslicer-bird.jpg'
const VSA = () =>{
  return (
    <Container maxWidth="med">
      <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
          My Research Experience
        </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        In my undergraduate career, I always wondered what students would research. In the beginning of my senior year, I was given a chance to do
        research under Dr. Srisa-an. I have had the privilege to be able to learn from the professors and other grad students that I had the opportunity
        to work with. Although, the work is remote and involves me sitting in front of a computer the whole time, it has still provided me a lot of chances
        to learn things that I would not be able to normally learn through the university's course work.
      </Typography>
      <div style={{ textAlign:"center" }}>
        <img src={model_image} align="center" alt="description" height="200"/>
      </div>
      <br/>
      <Typography variant="h6" color="textSecondary" paragraph>
        The research that I was helping conduct was finding data on 3D models that have hollow spaces, or voids, inside of them. The reason why we needed
        to find these 3D models was to be able to gather data on models that have intentional voids inside of them and determine that they are safe and intentional voids.
        This research is necessary because as 3D printing becomes more and more relevant, users would need a way to guarantee that the 3D model that they will be printing
        will be the model that they intend.
      </Typography>
      <div style={{ textAlign:"center" }}>
        <img src={thingiverse_image} align="center" alt="description"/>
      </div>
      <Typography variant="h6" color="textSecondary" paragraph>
        With my role, I was tasked with downloading models off of a website called Thingiverse. This is a public website where users would be able to
        upload their 3D models for the public to enjoy and use for themselves. I built a python script to scrape those sites and download as many 3D models as we can.
        I then run an analysis on those models and collect the models that have voids inside of them. Through this research, I was able to develop skills in web scraping
        and managed to grasp a better understanding on how important a security signature on a file is.
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        The experience that I have gained through this research process is something that I could not learn from anywhere else. It has helped my resolve to 
        delve into the world of cybersecurity for software. Through this research experience, I am helping to guarantee the security of a 3D model, and that is something
        that I just find very interesting that this is something that I get to do.
      </Typography>
      <div style={{ textAlign:"center" }}>
      </div>
    </Container>
  );
};

export default VSA;