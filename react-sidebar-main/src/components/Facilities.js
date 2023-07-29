import React from 'react';
import { Grid, Typography } from '@mui/material';

const TwoColumn = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7}>
        <Typography variant="body2" style={{ textAlign: 'justify', padding: '2rem', margin: '2rem' }}>
          In 1949, Shri. C. Rajam gave the newly independent India-Madras Institute of Technology so that MIT could establish the strong technical base it needed to take its place in the world. It was the rare genius and daring of its founder that made MIT offer courses like Aeronautical Engineering, Automobile Engineering, Electronics Engineering, and Instrument Technology for the first time in our country. Now it also provides technical education in other engineering fields such as Rubber and Plastic Technology & Production Technology. It was merged with Anna University in the year 1978. Sixty years hence, while it continues to be a pioneer in courses that it gave birth to, it is already renowned for producing the crème de la crème of the scientific community in more nascent courses such as Computer Science and Information Technology MIT has produced great scientists like Dr. A.P.J. Abdul Kalam, versatile genius like Sujatha, and many more. The broad-based education, coupled with practice-oriented training in their specialty, has enabled the students of MIT to handle with skill and success a wide variety of technical problems. The Madras Institute of Technology has developed into an important center of engineering education and earned an excellent reputation both in India and abroad. MIT had received many awards, including an award for the Best Overall Performance, awarded by the Indian Society of Technical Education (ISTE) during the year 1999.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={5}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', margin: '2rem' }}>
          <Typography variant="h5" component="div" className="ui header" style={{ marginTop: '1rem', textAlign: 'center', marginBottom: '3rem' }}>
            FACILITIES
          </Typography>
          <img src="https://mitindia.edu/images/mit/banner_study/Facility_new.png" alt="Image" style={{ width: '50%', height: 'auto' }} />
        </div>
      </Grid>
    </Grid>
  );
};

export default TwoColumn;
