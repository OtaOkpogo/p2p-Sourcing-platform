require('dotenv').config();

const config = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/p2p-platform',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || 'your_stripe_secret_key',
};

module.exports = config;

