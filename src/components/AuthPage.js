import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, Card,  CardActions, Button, TextField, Typography, InputAdornment } from '@mui/material';
import { AccountCircle, Lock } from '@mui/icons-material';

const AuthPage = () => {
  const { register, login } = useAuth();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    register({ username, password, firstName, role: 'user' });
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card sx={{ width: '400px', padding: '20px' }}>
        <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
          {isRegister ? 'Sign Up' : 'Login'}
        </Typography>
        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          {isRegister && (
            <TextField
              fullWidth
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          )}
          <TextField
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ backgroundColor: 'purple', marginTop: '20px' }}>
            {isRegister ? 'Sign Up' : 'Login'}
          </Button>
        </form>
        <CardActions sx={{ justifyContent: 'center', marginTop: '20px' }}>
          <Typography variant="body1">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}
            <Button onClick={() => setIsRegister(!isRegister)} style={{ textTransform: 'none', marginLeft: '5px' }}>
              {isRegister ? 'Login' : 'Sign Up'}
            </Button>
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AuthPage;
