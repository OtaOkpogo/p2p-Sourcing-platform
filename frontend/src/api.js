import axios from 'axios';

const API_URL = 'http://localhost:5000/api/campaigns';
const AUTH_URL = 'http://localhost:5000/api/auth'; // Assuming auth routes are here

// Create a new campaign
export const createCampaign = async (campaignData) => {
  try {
    const response = await axios.post(API_URL, campaignData);
    return response.data;
  } catch (error) {
    console.error('Error creating campaign:', error);
    throw error.response?.data?.message || 'Error creating campaign';
  }
};

// Fetch all campaigns
export const fetchCampaigns = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw error.response?.data?.message || 'Error fetching campaigns';
  }
};

// Fetch a single campaign by ID
export const fetchCampaignById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching campaign:', error);
    throw error.response?.data?.message || 'Error fetching campaign';
  }
};

// Donate to a campaign
export const donateToCampaign = async (id, amount) => {
  try {
    const response = await axios.post(`${API_URL}/${id}/donate`, { amount });
    return response.data;
  } catch (error) {
    console.error('Error donating to campaign:', error);
    throw error.response?.data?.message || 'Error donating to campaign';
  }
};

// Fetch campaign details (same as fetchCampaignById)
export const getCampaignDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching campaign details:', error);
    throw error.response?.data?.message || 'Error fetching campaign details';
  }
};

// User login
export const login = async (userData) => {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error.response?.data?.message || 'Error logging in';
  }
};

// User logout
export const logout = () => {
  localStorage.removeItem('token');
};

