import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText } from '@mui/material';
import { useCart } from '../context/CartContext';
import { useProduct } from '../context/ProductContext';


const allergyOptions = ["Dairy", "Gluten", "Egg", "Nuts", "Soy"];

function Menu() {
  const { addToCart } = useCart();
  const { products } = useProduct();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  // Group products by category
  const menuItems = products.reduce((acc, product) => {
    const category = acc.find(cat => cat.category === product.category);
    if (category) {
      category.items.push(product);
    } else {
      acc.push({ category: product.category, items: [product] });
    }
    return acc;
  }, []);

  // Filter products based on search query and selected allergies
  const filteredMenuItems = menuItems.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      selectedAllergies.every(allergy => !item.allergies.includes(allergy))
    )
  }));

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
        Our Menu
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', gap: '20px' }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: '300px' }}
        />
        <FormControl sx={{ width: '300px' }}>
          <InputLabel>Allergies</InputLabel>
          <Select
            multiple
            value={selectedAllergies}
            onChange={(e) => setSelectedAllergies(e.target.value)}
            renderValue={(selected) => selected.join(', ')}
          >
            {allergyOptions.map((allergy) => (
              <MenuItem key={allergy} value={allergy}>
                <Checkbox checked={selectedAllergies.includes(allergy)} />
                <ListItemText primary={allergy} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {filteredMenuItems.map((category) => (
        <Box key={category.category} sx={{ marginBottom: '40px' }}>
          <Typography variant="h4" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
            {category.category}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {category.items.map((item) => (
              <Card key={item.id} sx={{ width: '300px', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }, margin: '10px' }}>
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.name}
                  sx={{ height: '200px', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ fontFamily: 'Lobster, cursive' }}>{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">Price: {item.price}</Typography>
                  <Button variant="contained" color="primary" onClick={() => addToCart(item)} sx={{ marginTop: '10px' }}>
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Menu;
