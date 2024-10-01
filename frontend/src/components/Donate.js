import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe.js
const stripePromise = loadStripe('your_stripe_publishable_key');

const Donate = ({ campaignId }) => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDonation = async () => {
    setLoading(true);
    setError(null);

    try {
      // Create a Checkout Session
      const { data } = await axios.post(`/api/campaigns/${campaignId}/donate`, { amount });
      
      const stripe = await stripePromise;
      // Redirect to Stripe Checkout
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h3>Donate to this Campaign</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        min="1"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
      <button
        className="btn btn-primary mt-3"
        onClick={handleDonation}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Donate'}
      </button>
    </div>
  );
};

export default Donate;

