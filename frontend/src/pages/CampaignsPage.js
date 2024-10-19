import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

// Example campaigns data
const campaigns = [
  {
    id: 1,
    title: 'Campaign 1',
    description: 'This is the first campaign description.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Campaign 2',
    description: 'This is the second campaign description.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Campaign 3',
    description: 'This is the third campaign description.',
    image: 'https://via.placeholder.com/150',
  },
  // Add more campaigns as needed
];

const CampaignsPage = () => {
  return (
    <Grid container spacing={4}>
      {campaigns.map((campaign) => (
        <Grid item xs={12} sm={6} md={4} key={campaign.id}>
          {/* Framer Motion wrapping the Card component for animation */}
          <motion.div
            whileHover={{ scale: 1.03 }}  // Slightly increase size on hover
            whileTap={{ scale: 0.97 }}    // Slightly decrease size on tap
            transition={{ duration: 0.3 }} // Smooth transition effect
          >
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={campaign.image}
                alt={campaign.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {campaign.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {campaign.description}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  View Campaign
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default CampaignsPage;

