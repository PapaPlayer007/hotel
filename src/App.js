import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider, Box } from '@mui/material';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Cart from './components/Cart';
import PlayZone from './components/PlayZone';
import Rooms from './components/Rooms';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import darkTheme from './theme';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { RoomProvider } from './context/RoomContext';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPanel from './components/AdminPanel';
import UserDashboard from './components/UserDashboard';
import AuthPage from './components/AuthPage'; // Import AuthPage
import './App.css';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HashRouter>
        <CartProvider>
          <AuthProvider>
            <ProductProvider>
              <RoomProvider>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                  <Navbar />
                  <Container style={{ fontFamily: 'Roboto, sans-serif', marginTop: '20px', flex: '1' }}>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/menu" element={<Menu />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/play-zone" element={<PlayZone />} />
                      <Route path="/rooms" element={<Rooms />} />
                      <Route path="/auth" element={<AuthPage />} /> {/* Updated route */}
                      <Route path="/admin" element={<ProtectedRoute element={<AdminPanel />} role="admin" />} />
                      <Route path="/dashboard" element={<ProtectedRoute element={<UserDashboard />} />} />
                    </Routes>
                  </Container>
                  <Footer />
                </Box>
              </RoomProvider>
            </ProductProvider>
          </AuthProvider>
        </CartProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
