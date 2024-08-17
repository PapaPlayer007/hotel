import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const appetizers = [
  { title: 'Spring Rolls', description: 'Crispy rolls with vegetables', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Garlic Bread', description: 'Toasted bread with garlic butter', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Bruschetta', description: 'Grilled bread with tomato and basil', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Stuffed Mushrooms', description: 'Mushrooms stuffed with cheese and herbs', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Mozzarella Sticks', description: 'Fried mozzarella cheese sticks', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Chicken Wings', description: 'Spicy chicken wings with dip', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Nachos', description: 'Tortilla chips with cheese and jalapenos', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Calamari', description: 'Fried squid rings with dip', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
];

function AppetizersPage() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
        Appetizers
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {appetizers.map((item) => (
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

export default AppetizersPage;
