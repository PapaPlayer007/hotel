import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, ListItemAvatar, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useProduct } from '../context/ProductContext';

const ProductList = () => {
  const { products, deleteProduct } = useProduct();

  return (
    <List>
      {products.map((product) => (
        <ListItem key={product.id}>
          <ListItemAvatar>
            <Avatar src={product.imageUrl} alt={product.name} />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Price: ${product.price} | Category: ${product.category}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteProduct(product.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;
