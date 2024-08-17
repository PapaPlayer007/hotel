import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import MenuCategory from './MenuCategory';
import MainCarousel from './MainCarousel';
import products from '../data/products.json'; // Adjust the path as needed

const categories = ['Pizza', 'Salad', 'Pasta', 'Sandwich', 'Burger', 'Dessert'];

function getRandomProduct(category) {
  const filteredProducts = products.filter(product => product.category === category);
  const randomIndex = Math.floor(Math.random() * filteredProducts.length);
  return filteredProducts[randomIndex];
}

function Home() {
  const [randomProducts, setRandomProducts] = useState({});

  useEffect(() => {
    const updateRandomProducts = () => {
      const newRandomProducts = {};
      categories.forEach(category => {
        newRandomProducts[category] = getRandomProduct(category);
      });
      setRandomProducts(newRandomProducts);
    };

    // Initial load
    updateRandomProducts();

    // Set interval to update random products every 10 seconds (10000 ms)
    const intervalId = setInterval(updateRandomProducts, 10000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box sx={{ paddingBottom: '40px' }}>
      <MainCarousel />
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
        Explore Our Menu
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {categories.map(category => (
          <MenuCategory
            key={category}
            id={randomProducts[category]?.id}
            title={randomProducts[category]?.name}
            description={randomProducts[category]?.description}
            image={randomProducts[category]?.imageUrl}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Home;
