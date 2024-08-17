import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const images = [
  { src: '/images/homePage1.webp', alt: 'Image 1', srcSet: '/images/homePage1@2x.jpeg 2x, /images/homePage1@3x.jpeg 3x' },
  { src: '/images/HomeImage2.webp', alt: 'Image 2', srcSet: '/images/HomeImage2@2x.jpeg 2x, /images/HomeImage2@3x.jpeg 3x' },
  { src: '/images/Home3.webp', alt: 'Image 3', srcSet: '/images/Home3@2x.jpeg 2x, /images/Home3@3x.jpeg 3x' },
  { src: '/images/4.webp', alt: 'Image 4', srcSet: '/images/4@2x.jpeg 2x, /images/4@3x.jpeg 3x' },
];

function MainCarousel() {
  return (
    <Box sx={{ position: 'relative', textAlign: 'center' }}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={3000}
        stopOnHover={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              srcSet={image.srcSet}
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'rgba(0, 0, 0, 0.4)',
          p: 2,
          borderRadius: 1,
          filter: 'opacity(.7)',
        }}
      >
        <Typography variant="h6" color="white" gutterBottom sx={{ fontSize: '1.5rem' }}>
          Welcome to Our Hotel and Restaurant
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/menu">
          Order Now
        </Button>
      </Box>
    </Box>
  );
}

export default MainCarousel;
