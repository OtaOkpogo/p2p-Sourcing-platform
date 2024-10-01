const express = require('express');
const Campaign = require('../models/Campaign');
const router = express.Router();
const auth = require('../middleware/auth'); // Middleware for protected routes

// Create a new campaign
router.post('/', auth, async (req, res) => {
  const { title, description, targetAmount, deadline } = req.body;
  const campaign = new Campaign({
    title, description, targetAmount, deadline,
    user: req.user,
  });
  await campaign.save();
  res.json(campaign);
});

// List all campaigns
router.get('/', async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
});

module.exports = router;

