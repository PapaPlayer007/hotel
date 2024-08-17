import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

function PlayZone() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('/playzone.json')
      .then(response => response.json())
      .then(data => setGames(data.games))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
        Play Zone
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'center', marginBottom: '20px' }}>
        A fun and safe area for kids to play and enjoy digital games.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {games.map(game => (
          <Card key={game.id} sx={{ width: '300px', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }, margin: '10px' }}>
            <CardMedia
              component="img"
              sx={{ height: '200px', objectFit: 'cover' }}
              image={game.image}
              alt={game.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontFamily: 'Lobster, cursive' }}>
                {game.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {game.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default PlayZone;
