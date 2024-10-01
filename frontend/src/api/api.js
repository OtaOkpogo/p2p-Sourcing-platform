import axios from 'axios';

// Set up base URL for your API
const API_URL = '/api';

// Add Authorization token to request headers (if token exists)
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// Register new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get all campaigns
export const getCampaigns = async () => {
  try {
    const response = await axios.get(`${API_URL}/campaigns`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Create new campaign
export const createCampaign = async (campaignData, token) => {
  try {
    setAuthToken(token);
    const response = await axios.post(`${API_URL}/campaigns`, campaignData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Donate to a campaign
export const donateToCampaign = async (campaignId, amount, token) => {
  try {
    setAuthToken(token);
    const response = await axios.post(`${API_URL}/campaigns/${campaignId}/donate`, { amount });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

