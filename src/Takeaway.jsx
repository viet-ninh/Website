import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Takeaway = () => {
  return(
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        My Research Takeaways
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Through this research opportunity, I was able to takeaway many different skills and different perspectives to 3D models and their security.
        The first skill that I was able to takeaway from this first semester was the versatility of the Selenium python package. This package was
        extremely useful in website scraping data, and I can see myself using this for the future to collect data whenever I would need it in the future.
        Another takeaway from this project was the importance of security of 3D models and that they are safe to use. This makes me realize that no matter
        how small a file can be, ensuring that it is a safe file is important no matter what the file is used for. Ensuring the file will ensure that
        a process will be finished as it is intended to work as.
      </Typography>
      <Typography variant="h6" color="textSecondary" paragraph>
        Being able to research on the security of 3D model files has made me want to study more about cybersecurity. I think that cyber security is important
        for our future because as the internet and technology become more and more prevalent, I believe that the importance of the files and data that we use and 
        send across the internet is secure and used in a safe manner. Being able to work on this project, provided me with more insight on one aspect of cybersecurity
        and I cannot wait to see how much more I learn in the throughout my spring semester.
      </Typography>
    </Container>
  );
};

export default Takeaway;