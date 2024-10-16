import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // adjust to your backend API URL

export const fetchCampaigns = async () => {
  return await axios.get(`${API_URL}/campaigns`);
};

export const fetchCampaignById = async (id) => {
  return await axios.get(`${API_URL}/campaigns/${id}`);
};

export const createCampaign = async (campaignData, token) => {
  return await axios.post(`${API_URL}/campaigns`, campaignData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Add other necessary API functions for login, registration, donations, etc.

