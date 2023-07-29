import React from 'react';
import { Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(180deg, black, black)', padding: '2rem', color: 'white' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" style={{ marginBottom: '1rem' }}>
            QUICK LINKS
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 1</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 2</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 3</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 4</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 5</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" style={{ marginBottom: '1rem' }}>
          QUICK LINKS
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 1</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 2</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 3</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 4</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 5</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" style={{ marginBottom: '1rem' }}>
            ANNA UNIVERSITY
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 1</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 2</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 3</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 4</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 5</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" style={{ marginBottom: '1rem' }}>
            DOWNLOADS
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 1</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 2</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 3</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 4</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="#">Link 5</a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
