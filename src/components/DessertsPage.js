import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const desserts = [
  { title: 'Chocolate Cake', description: 'Rich chocolate cake with ganache', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Ice Cream', description: 'Vanilla ice cream with toppings', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Cheesecake', description: 'Creamy cheesecake with berry sauce', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Tiramisu', description: 'Classic Italian dessert with coffee and mascarpone', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Brownies', description: 'Chocolate brownies with nuts', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Fruit Tart', description: 'Fresh fruit tart with custard', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Panna Cotta', description: 'Italian dessert with cream and berries', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Macarons', description: 'French macarons with various flavors', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
];

function DessertsPage() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
        Desserts
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {desserts.map((item) => (
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

export default DessertsPage;
