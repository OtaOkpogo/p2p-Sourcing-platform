const express = require('express');
const { createCampaign, getCampaignById, getAllCampaigns, donateToCampaign } = require('../controllers/campaignController');
const router = express.Router();

router.post('/', createCampaign);  // POST request for creating campaigns
router.get('/', getAllCampaigns);  // GET request to fetch all campaigns
router.get('/:id', getCampaignById);  // GET request for a single campaign by ID
router.post('/:id/donate', donateToCampaign);  // POST request to donate to a campaign

module.exports = router;

