import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useProduct } from "../context/ProductContext";
// import { useAuth } from "../context/AuthContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const { cart, addToCart, removeFromCart, decreaseQuantity } = useCart();
  const { products } = useProduct();
  // const { user } = useAuth();

  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {

    alert("Thank you for visiting! This is just a test webpage, created by Devansh Kumar Sharma");
    
  };

  // Select random recommendations from the menu
  const recommendations = products.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h3"
        gutterBottom
        style={{ fontFamily: "Lobster, cursive", textAlign: "center" }}
      >
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Your cart is empty
        </Typography>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {cart.map((item) => (
              <Card
                key={item.id}
                sx={{
                  width: "300px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  },
                  margin: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.name}
                  sx={{ height: "200px", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ fontFamily: "Lobster, cursive" }}
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                  <Typography variant="body2">Price: ₹{item.price}</Typography>
                  <Typography variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <IconButton color="primary" onClick={() => addToCart(item)}>
                      <AddIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => decreaseQuantity(item)}
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Box>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => removeFromCart(item)}
                    sx={{ marginTop: "10px", width: "100%" }}
                    startIcon={<DeleteIcon />}
                  >
                    Remove from Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginTop: "20px" }}
          >
            Total Cost: ₹{totalCost.toFixed(2)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Box>
        </>
      )}
      <Typography
        variant="h4"
        gutterBottom
        style={{
          fontFamily: "Lobster, cursive",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        You Might Also Like
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {recommendations.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: "300px",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={item.imageUrl}
              alt={item.name}
              sx={{ height: "200px", objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5" sx={{ fontFamily: "Lobster, cursive" }}>
                {item.name}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
              <Typography variant="body2">Price: ₹{item.price}</Typography>
              {
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(item)}
                  sx={{ marginTop: "10px" }}
                >
                  Add to Cart
                </Button>
              }
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Cart;

