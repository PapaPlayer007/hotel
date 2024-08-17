import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const AdminPanel = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
        Add New Product
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ProductList />
        </Grid>
        <Grid item xs={12} md={6}>
          <AddProductForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPanel;
