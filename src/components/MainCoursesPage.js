import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const mainCourses = [
  { title: 'Grilled Chicken', description: 'Juicy grilled chicken with herbs', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Pasta Alfredo', description: 'Creamy pasta with Alfredo sauce', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Steak', description: 'Grilled steak with garlic butter', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Salmon', description: 'Grilled salmon with lemon and dill', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Beef Burger', description: 'Juicy beef burger with cheese and lettuce', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Vegetable Stir-fry', description: 'Mixed vegetables stir-fried with soy sauce', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Chicken Curry', description: 'Spicy chicken curry with rice', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
  { title: 'Fish Tacos', description: 'Grilled fish tacos with salsa', image: 'https://th.bing.com/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' },
];

function MainCoursesPage() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
        Main Courses
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {mainCourses.map((item) => (
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

export default MainCoursesPage;
