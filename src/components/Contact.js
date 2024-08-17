import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

function Contact() {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom style={{ fontFamily: 'Lobster, cursive', textAlign: 'center' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" style={{ textAlign: 'center', marginBottom: '20px' }}>
        We'd love to hear from you! Please fill out the form below to get in touch.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Name" variant="outlined" margin="normal" />
          <TextField fullWidth label="Email" variant="outlined" margin="normal" />
          <TextField fullWidth label="Message" variant="outlined" margin="normal" multiline rows={4} />
          <Button variant="contained" color="primary" fullWidth sx={{ marginTop: '20px' }}>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
