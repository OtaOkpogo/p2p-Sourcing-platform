// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const HomePage = () => (
  <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to P2P Sourcing Platform
      </Typography>
      <Typography variant="h6" gutterBottom>
        Create or support campaigns to fund exciting projects!
      </Typography>
    </motion.div>
    <Box mt={3}>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/campaigns"
        sx={{ mr: 2 }}
      >
        View Campaigns
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        to="/create-campaign"
      >
        Create a Campaign
      </Button>
    </Box>
  </Container>
);

export default HomePage;

