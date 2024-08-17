import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useRoom } from '../context/RoomContext';

function Rooms() {
  const { rooms } = useRoom();

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
        Rooms for everyone
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Comfortable and well-equipped rooms for our guests.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {rooms.map((room) => (
          <Card key={room.id} sx={{ width: '300px', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }, margin: '10px' }}>
            <CardMedia
              component="img"
              image={room.imageUrl}
              alt={room.name}
              sx={{ height: '200px', objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontFamily: 'Lobster, cursive' }}>{room.name}</Typography>
              <Typography variant="body2" color="textSecondary">Price: ${room.price}</Typography>
              <Typography variant="body2" color="textSecondary">{room.description}</Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Rooms;
