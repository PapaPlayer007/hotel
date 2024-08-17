import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a1a1a',
        color: '#f5f5f5',
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        mt: '40px',
      }}
    >
      <Typography variant="h5" gutterBottom>
      “Experience the magic with us once, and you’ll find yourself coming back for more. Your first visit will be the start of many cherished memories.”
      </Typography>

      <Typography variant="body3" gutterBottom>
        © {new Date().getFullYear()} Your Hotel and Restaurant. All rights reserved.
      </Typography>

      <Box>
        <Link href="/privacy-policy" color="inherit" sx={{ margin: '0 10px' }}>
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" color="inherit" sx={{ margin: '0 10px' }}>
          Terms of Service
        </Link>
        <Link href="/contact" color="inherit" sx={{ margin: '0 10px' }}>
          Contact Us
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
