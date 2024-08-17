import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function MenuCategory({ title, description, image, id }) {
  const [hover, setHover] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        width: '300px',
        height: '400px',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'transform 0.3s, box-shadow 0.3s',
        borderRadius: '15px',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '15px',
        }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '10px',
          transition: 'opacity 0.3s',
          opacity: hover ? 1 : 0,
          borderRadius: '15px',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: '10px', fontFamily: 'Lobster, cursive' }}>{title}</Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>{description}</Typography>
        <Button
          component={Link}
          to="/menu"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          View More
        </Button>
      </CardContent>
    </Card>
  );
}

export default MenuCategory;
