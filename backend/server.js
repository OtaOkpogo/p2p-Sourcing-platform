const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const campaignRoutes = require('./routes/campaignRoutes'); // Import campaign routes
require('dotenv').config();  // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using URI from .env
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/p2p-platform';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use campaign routes
app.use('/api/campaigns', campaignRoutes);  // Ensure this matches the URL

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

