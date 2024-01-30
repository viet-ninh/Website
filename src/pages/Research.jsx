import React from 'react';
import { Typography, Container } from '@material-ui/core';
import thingiverse_image from '../static/research_images/thingiverse_image.png'
import model_image from '../static/research_images/prusaslicer-base.JPG'
import MyAppBar from '../components/MyAppBar';
const VSA = () =>{
  return (
    <Container maxWidth="med">
      <MyAppBar/>
        <br/>
        <br/>
        <br/>
        <br/>
      <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
        My Research Experience
        </Typography>
      <div style={{ textAlign:"center" }}>
        <img src={model_image} align="center" alt="description" height="200"/>
      <Typography>
          This image showcases an image of a 3D model that I was able to find with an intentional void.
      </Typography>
      <br/>
      </div>
      <Typography variant="h6" color="textSecondary" paragraph>
        The research that I was helping conduct was finding data on 3D models that have hollow spaces, or voids, inside of them. The reason why we needed
        to find these 3D models was to be able to gather data on models that have intentional voids inside of them and determine that they are safe and intentional voids.
        This research is necessary because as 3D printing becomes more and more relevant, users would need a way to guarantee that the 3D model that they will be printing
        will be the model that they intend.
      </Typography>
      <br/>
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
        With my python script, I used a python package called Selenium. What Selenium does is that it is able to mimic a web browser. This allows me to mimic a page on Thingiverse
        and grab all of the files that appear at the head page. My python script then checks if that file has already been downloaded, and will skip it.
        With the specific 3D model file type we are looking for is stl files, I would extract all of the stl files from each item in thingiverse. From there
        I will run an analysis on all of those models, and from the analysis results. I am able to tell and determine which file has a void or hollow space inside of it.
      </Typography>
      <div style={{ textAlign:"center" }}>
      </div>
    </Container>
  );
};

export default VSA;