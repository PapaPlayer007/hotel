import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const beverages = [
  { title: 'Lemonade', description: 'Refreshing lemonade with mint', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Coffee', description: 'Hot brewed coffee', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Tea', description: 'Hot tea with lemon and honey', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Smoothie', description: 'Fresh fruit smoothie', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Milkshake', description: 'Creamy milkshake with chocolate', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Iced Tea', description: 'Chilled iced tea with lemon', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Hot Chocolate', description: 'Warm hot chocolate with marshmallows', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Soda', description: 'Chilled soda with ice', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
];

function BeveragesPage() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
        Beverages
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {beverages.map((item) => (
          <Card key={item.title} sx={{ width: '300px', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' } }}>
            <CardMedia
              component="img"
              image={item.image}
              alt={item.title}
              sx={{ height: '200px', objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontFamily: 'Lobster, cursive' }}>{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default BeveragesPage;
