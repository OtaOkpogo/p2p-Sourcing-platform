const Campaign = require('../models/campaign'); // Ensure the Campaign model exists

// Create a new campaign
exports.createCampaign = async (req, res) => {
  try {
    const newCampaign = new Campaign(req.body);
    const savedCampaign = await newCampaign.save();
    res.status(201).json(savedCampaign);
  } catch (error) {
    res.status(500).json({ message: 'Error creating campaign', error });
  }
};

// Get all campaigns
exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaigns', error });
  }
};

// Get a campaign by ID
exports.getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }
    res.status(200).json(campaign);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaign', error });
  }
};

// Donate to a campaign
exports.donateToCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({ message: 'Campaign not found' });
    }

    campaign.amountRaised += req.body.amount;
    const updatedCampaign = await campaign.save();

    res.status(200).json(updatedCampaign);
  } catch (error) {
    res.status(500).json({ message: 'Error donating to campaign', error });
  }
};

