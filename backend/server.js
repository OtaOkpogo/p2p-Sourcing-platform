const express = require('express');
const router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');
const { createCampaign } = require('./controllers/campaignController'); // Adjust according to your file structure
const campaignRoutes = require('./routes/campaignRoutes'); // Import campaign routes

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/p2p-platform', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use campaign routes
app.use('/api/campaigns', campaignRoutes);  // Ensure this matches the URL

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

router.post('/campaigns', createCampaign);
