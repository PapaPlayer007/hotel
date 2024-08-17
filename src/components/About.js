import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
        About Us
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Welcome to our hotel and restaurant. We offer the best services and delicious food.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card component={Link} to="/rooms">
            <CardMedia
              component="img"
              image="https://th.bing.com/th/id/OIP.1nzXUsboUyztdVYcXYpjkQHaE7?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Our Hotel"
              sx={{ height: '300px', objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h5">Our Hotel</Typography>
              <Typography variant="body2">
                Experience luxury and comfort at our hotel. We provide top-notch amenities and services.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card component={Link} to="/menu">
            <CardMedia
              component="img"
              image="https://th.bing.com/th?id=OIP.DyMrFkrmqor49yk_sepxSQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Our Restaurant"
              sx={{ height: '300px', objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h5">Our Restaurant</Typography>
              <Typography variant="body2">
                Enjoy a variety of delicious dishes prepared by our expert chefs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card component={Link} to="/play-zone">
            <CardMedia
              component="img"
              image="https://th.bing.com/th?id=OIP.qhWY3YHreAYq_uHsMnwhvwAAAA&w=224&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              alt="Play Zone"
              sx={{ height: '300px', objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h5">Play Zone</Typography>
              <Typography variant="body2">
                A fun and safe area for kids to play and enjoy.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
