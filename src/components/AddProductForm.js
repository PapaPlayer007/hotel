import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useProduct } from '../context/ProductContext';

const AddProductForm = () => {
  const { addProduct } = useProduct();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price: parseFloat(price), category, imageUrl };
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newProduct.imageUrl = reader.result;
        addProduct(newProduct);
      };
      reader.readAsDataURL(imageFile);
    } else {
      addProduct(newProduct);
    }
    setName('');
    setPrice('');
    setCategory('');
    setImageUrl('');
    setImageFile(null);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Price (INR)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <TextField
        label="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Product
      </Button>
    </Box>
  );
};

export default AddProductForm;
